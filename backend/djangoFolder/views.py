# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MP3File
from .serializers import MP3FileSerializer
from .vosk import vosk_text_transcription

from django.http import HttpResponse

class MP3FileUploadView(APIView):
    # text = ""
    # receiving the mp3 file from the frontend function
    # post request is when frontend sends data to backend
    # and can also recieve response text back from it
    def post(self, request, format=None):
        print('hello')
        print(request)
        print(request.data)
        print('mp3File' in request.FILES)
        if 'mp3File' in request.FILES:
            mp3_file = request.FILES['mp3File']
            print(mp3_file)
        # first, checks that it's an mp3 file?
        # serializer = MP3FileSerializer(data=request.data)
            print('made it here')
            # print(serializer)
        # print(serializer.is_valid())
        # print(serializer.errors)
        # if serializer.is_valid():
            # calls upon method to convert the mp3 into text string function
            # text = vosk_text_transcription(data=request.data) (changed?)
            print('hello?')
            # mp3_file = serializer.validated_data.get('mp3_file')
            print('no vosk??')
            text = vosk_text_transcription(mp3_file)
            print('yes vosk')
            # i think if this request is created then call the get func from frontend
            print(text)
            return Response({'message': text}, status=status.HTTP_201_CREATED)
            # return Response({'text': text}, status=status.HTTP_200_OK)
        else:
            print('bad')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        


    # don't need a get req to give the text to the frontend function.
    # can return text via post req
    # get request is when frontend gets data from backend
    # def get(self, request):
    #     response = HttpResponse(self.text, content_type='text/plain')
    #     return response