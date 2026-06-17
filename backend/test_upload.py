import requests
import os

# Test the video upload API
url = 'http://localhost:8000/api/detect_deepfake/'

# Path to test video
video_path = '../Dataset/fake/Hrithik Fake.mp4'

if os.path.exists(video_path):
    print(f"Testing with video: {video_path}")
    
    with open(video_path, 'rb') as video_file:
        files = {'video': video_file}
        response = requests.post(url, files=files)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
else:
    print(f"Video file not found: {video_path}") 