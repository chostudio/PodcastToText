# need to pip install -U openai-whisper requests beautifulsoup4

import whisper

def transcribe_audio(file_path):
    """
    Transcribes an .mp3 file using OpenAI's Whisper model.

    Args:
    - file_path (str): The path to the .mp3 file to transcribe.

    Returns:
    - str: The transcribed text.
    """
    # Load the Whisper model
    model = whisper.load_model("base")  # You can use "small", "medium", "large" for accuracy vs speed

    # Transcribe the audio file
    result = model.transcribe(file_path)
    
    # Return the transcribed text
    return result["text"]

# Example usage:
file_path = "path/to/your_audio.mp3"
transcription = transcribe_audio(file_path)
print("Transcription:", transcription)
