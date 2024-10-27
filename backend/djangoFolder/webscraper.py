import requests
from bs4 import BeautifulSoup

def download_mp3_from_audio_tag(webpage_url):
    """
    This function takes a webpage URL, scrapes for an <audio> tag, extracts the .mp3 URL, 
    and downloads the .mp3 file to the local server.
    
    Args:
    - webpage_url (str): The URL of the webpage containing the <audio> tag with the .mp3 file.
    
    Returns:
    - str: Message indicating success or failure, along with the local filename or error.
    """
    
    try:
        # Send a GET request to fetch the webpage content
        response = requests.get(webpage_url)
        response.raise_for_status()  # Raise an exception for bad status codes

        # Parse the webpage content with BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find the first <audio> tag (you can modify this for multiple <audio> tags)
        audio_tag = soup.find('audio')
        
        if audio_tag:
            source_tag = audio_tag.find('source')
            if source_tag and 'src' in source_tag.attrs:
                # Extract the URL of the .mp3 file
                mp3_url = source_tag['src']
                print(f"Found .mp3 file URL: {mp3_url}")
                
                # Download the .mp3 file
                mp3_response = requests.get(mp3_url, stream=True)
                local_filename = 'downloaded_file.mp3'  # You can customize the name or use something from the URL
                
                # Save the .mp3 file
                with open(local_filename, 'wb') as f:
                    for chunk in mp3_response.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)
                            
                return f'MP3 file downloaded successfully as: {local_filename}'
            else:
                return "No <source> tag with .mp3 found in <audio>."
        else:
            return "No <audio> tag found on the page."
    
    except requests.exceptions.RequestException as e:
        return f"Failed to retrieve webpage or download file: {e}"

# Example usage:
webpage_url = 'https://example.com/page-with-audio'
result = download_mp3_from_audio_tag(webpage_url)
print(result)
