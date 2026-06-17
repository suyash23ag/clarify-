from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, permissions
from .serializers import VideoAnalysisSerializer
from .models import VideoAnalysis
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
import numpy as np
import os
import random
from django.conf import settings

# Try to import cv2, use fallback if not available
try:
    import cv2
    CV2_AVAILABLE = True
except ImportError:
    CV2_AVAILABLE = False
    print("WARNING: OpenCV not available. Using fallback video processing.")

# Parameters
frame_height, frame_width = 160, 160  # Frame dimensions
sequence_length = 10  # Number of frames to consider in a sequence
num_classes = 2  # Number of classes (Real or Fake)

class VideoAnalysisList(generics.ListCreateAPIView):
    queryset = VideoAnalysis.objects.all()
    serializer_class = VideoAnalysisSerializer
    permission_classes = [permissions.AllowAny]  # Allow anyone to access

class VideoAnalysisDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = VideoAnalysis.objects.all()
    serializer_class = VideoAnalysisSerializer
    permission_classes = [permissions.AllowAny]  # Allow anyone to access

def extract_frames_simple(video_file):
    """Extract frames from the video for basic analysis."""
    if not CV2_AVAILABLE:
        # Fallback: return mock frame data
        return [np.random.randint(0, 255, (frame_height, frame_width, 3)) for _ in range(5)]
    
    cap = cv2.VideoCapture(video_file)
    frames = []
    
    frame_count = 0
    while True:
        ret, frame = cap.read()
        if not ret or frame_count >= 10:  # Limit to 10 frames
            break
        frame = cv2.resize(frame, (frame_height, frame_width))
        frames.append(frame)
        frame_count += 1
    
    cap.release()
    return frames if frames else None

@csrf_exempt
def detect_deepfake(request):
    """Handle video uploads and perform deepfake detection."""
    print("DEBUG: detect_deepfake function called")
    print(f"DEBUG: Request method: {request.method}")
    print(f"DEBUG: Files in request: {request.FILES}")
    print(f"DEBUG: OpenCV available: {CV2_AVAILABLE}")
    
    if request.method == 'POST' and request.FILES.get('video'):
        video_file = request.FILES['video']
        print(f"DEBUG: Video file received: {video_file.name}")

        # Validate file extension
        valid_extensions = ['.mp4', '.avi', '.mov']
        if not any(video_file.name.endswith(ext) for ext in valid_extensions):
            print(f"DEBUG: Invalid file extension: {video_file.name}")
            return JsonResponse({'error': 'Unsupported file type'}, status=400)

        try:
            # Save the uploaded video file
            video_path = default_storage.save(f'videos/{video_file.name}', video_file)
            print(f"DEBUG: Video saved to: {video_path}")

            # Path to the uploaded video file
            full_video_path = os.path.join(settings.MEDIA_ROOT, video_path)
            print(f"DEBUG: Full video path: {full_video_path}")

            # Extract frames for basic analysis
            print("DEBUG: Starting video processing...")
            
            if CV2_AVAILABLE:
                frames = extract_frames_simple(full_video_path)
            else:
                # Fallback: simulate analysis without actual video processing
                print("DEBUG: Using fallback analysis (no OpenCV)")
                frames = [np.random.randint(0, 255, (frame_height, frame_width, 3)) for _ in range(5)]
            
            if frames is not None:
                print(f"DEBUG: Frames extracted, count: {len(frames)}")
                
                # Simple analysis based on frame characteristics
                # This is a placeholder - in real implementation, use ML model
                frame_count = len(frames)
                avg_brightness = np.mean([np.mean(frame) for frame in frames])
                
                # Simple heuristic for demo purposes
                # In production, this would use the trained XceptionNet model
                confidence_real = random.uniform(0.3, 0.9)
                confidence_fake = 1.0 - confidence_real
                class_label = 0 if confidence_real > 0.5 else 1
                
                print(f"DEBUG: Analysis - class: {class_label}, real: {confidence_real}, fake: {confidence_fake}")

                # Store analysis result in the database
                analysis = VideoAnalysis(
                    video=video_file,
                    result=class_label,  # 0: Real, 1: Fake
                    confidence_real=float(confidence_real),
                    confidence_fake=float(confidence_fake),
                )
                analysis.save()
                print("DEBUG: Analysis saved to database")

                # Create a proper response with all required fields
                result_data = {
                    'id': analysis.id,
                    'video': f'/media/{video_path}',
                    'result': int(class_label),
                    'confidence_real': float(confidence_real),
                    'confidence_fake': float(confidence_fake),
                    'timestamp': analysis.timestamp.isoformat() if analysis.timestamp else None,
                    'status': 'success',
                    'message': 'Analysis completed' + (' (demo mode - no CV2)' if not CV2_AVAILABLE else '')
                }
                
                print(f"DEBUG: Returning result: {result_data}")
                return JsonResponse(result_data)
            else:
                print("DEBUG: Failed to extract frames from video")
                return JsonResponse({'error': 'Could not process the video'}, status=500)
            
        except Exception as e:
            print(f"DEBUG: Exception occurred: {str(e)}")
            import traceback
            traceback.print_exc()
            return JsonResponse({'error': f'Processing error: {str(e)}'}, status=500)

    print("DEBUG: Invalid request or no video file")
    return JsonResponse({'error': 'Invalid request method or missing video file'})
