# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MP3File
from .serializers import MP3FileSerializer
from .vosk import vosk_text_transcription

from django.http import HttpResponse

class MP3FileUploadView(APIView):
    text = ""
    # receiving the mp3 file from the frontend function
    # post request is when frontend sends data to backend
    def post(self, request, format=None):
        # first, checks that it's an mp3 file?
        serializer = MP3FileSerializer(data=request.data)
        if serializer.is_valid():
            # calls upon method to convert the mp3 into text string function
            self.text = vosk_text_transcription(data=request.data)
            # i think if this request is created then call the get func from frontend
            print(self.text)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    # giving the text to the frontend function
    # get request is when frontend gets data from backend
    def get(self, request):
        response = HttpResponse(self.text, content_type='text/plain')
        return response