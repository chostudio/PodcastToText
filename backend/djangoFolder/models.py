# models.py
from django.db import models

class MP3File(models.Model):
    file = models.FileField(upload_to='mp3_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
