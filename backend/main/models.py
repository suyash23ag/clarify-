from django.db import models

# Create your models here.

class VideoAnalysis(models.Model):
    VIDEO_STATUS_CHOICES = [
        (0, 'Real'),
        (1, 'Fake'),
    ]

    video = models.FileField(upload_to='videos/')
    result = models.IntegerField(choices=VIDEO_STATUS_CHOICES)
    confidence_real = models.FloatField()
    confidence_fake = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Analysis on {self.timestamp}: {self.get_result_display()}"
