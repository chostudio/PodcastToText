#vosk.py

import subprocess
import sys

from vosk import Model, KaldiRecognizer, SetLogLevel

# figure out how to weave this into the django architecture


def vosk_text_transcription(mp3_data):
    SAMPLE_RATE = 16000

    SetLogLevel(0)
    print('hello')
    model = Model(lang="en-us")
    rec = KaldiRecognizer(model, SAMPLE_RATE)
    print('hello2')
    mp3_bytes = mp3_data.read()
    with subprocess.Popen(["ffmpeg", "-loglevel", "quiet", "-i", "-", "-ar", str(SAMPLE_RATE), "-ac", "1", "-f", "s16le", "-"],
                          stdin=subprocess.PIPE, stdout=subprocess.PIPE) as process:
        pcm_data, _ = process.communicate(input=mp3_bytes)
    print('hello3')
    # Feed PCM data to the recognizer
    rec.AcceptWaveform(pcm_data)
    result = rec.FinalResult()




# below is from test/simple.py

# import wave
# import sys

# from vosk import Model, KaldiRecognizer, SetLogLevel

# # You can set log level to -1 to disable debug messages
# SetLogLevel(0)


# # convert to wav file



# #then vosk

# wf = wave.open(sys.argv[1], "rb")
# if wf.getnchannels() != 1 or wf.getsampwidth() != 2 or wf.getcomptype() != "NONE":
#     print("Audio file must be WAV format mono PCM.")
#     sys.exit(1)

# model = Model(lang="en-us")

# # You can also init model by name or with a folder path
# # model = Model(model_name="vosk-model-en-us-0.21")
# # model = Model("models/en")

# rec = KaldiRecognizer(model, wf.getframerate())
# rec.SetWords(True)
# rec.SetPartialWords(True)

# while True:
#     data = wf.readframes(4000)
#     if len(data) == 0:
#         break
#     if rec.AcceptWaveform(data):
#         print(rec.Result())
#     else:
#         print(rec.PartialResult())

# print(rec.FinalResult())