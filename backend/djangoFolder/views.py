# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MP3File
from .serializers import MP3FileSerializer

class MP3FileUploadView(APIView):
    def post(self, request, format=None):
        serializer = MP3FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
