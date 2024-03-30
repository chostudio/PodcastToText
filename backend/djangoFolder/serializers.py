# serializers.py
from rest_framework import serializers
from .models import MP3File

# class MP3FileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MP3File
#         fields = '__all__'
#     # mp3_file = serializers.FileField()
class MP3FileSerializer(serializers.Serializer):
    mp3_file = serializers.FileField()