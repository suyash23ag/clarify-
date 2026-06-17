from django.urls import path
from . import views

urlpatterns = [
    path('detect_deepfake/', views.detect_deepfake, name='detect_deepfake'),
    path('video-analyses/', views.VideoAnalysisList.as_view(), name='video-analysis-list'),
    path('video-analyses/<int:pk>/', views.VideoAnalysisDetail.as_view(), name='video-analysis-detail'),
]
