import React, { useState } from 'react'; // imported react, we'll see if this fixes the problem
import TextOutputComponent from './TextOutputComponent.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import axios from 'axios';

function App() {

  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('mp3File', file);
    const url = 'http://127.0.0.1:8000/upload/';
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        } // removed a comma here
      });
      setResponseMessage(response.data.message);
      console.log('File uploaded successfully');
    } catch (error) {
      // Handle errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server');
      }
      console.error('Error uploading file:', error);
    }
  };


  return (
    <div className='container'>
      <div className="row">
        <div className="col md-auto"></div>
        <div className='col-8 justify-content-center'>
          {/* put like a icon of a microphone to arrow to text drawing here */}
          <h1 className='text-center pt-5 mt-5 font-weight-bold'>PodcastToText</h1>
          <p className='text-center' >Get free transcription for subtitles.</p>
          <p className='text-center my-3'>Upload an mp3 file below or paste in a YouTube or Spotify link.</p>

          {/* need error handling so that only mp3 files are allowed */}

          <form className='align-items-center' onSubmit={handleSubmit}>
            <input className='form-control inline w-40 m-2 mt-5' type='file' name='audio' accept=".mp3" onChange={handleFileChange} />
            <button type="submit">Submit</button>
          </form>

          < TextOutputComponent text={responseMessage} />

          <br />
          <br />
          <h2>What is a podcast-to-text converter?</h2>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate quis nemo praesentium non, odio consequatur necessitatibus ea id esse sed magni ipsam quod repellendus culpa eveniet voluptatibus doloribus.
          </p>
          <h2>How can you use the PodcastToText converter?</h2>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate quis nemo praesentium non, odio consequatur necessitatibus ea id esse sed magni ipsam quod repellendus culpa eveniet voluptatibus doloribus.
          </p>
          <h2>How does a podcast-to-text converter work?</h2>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate quis nemo praesentium non, odio consequatur necessitatibus ea id esse sed magni ipsam quod repellendus culpa eveniet voluptatibus doloribus.
          </p>
          <h2>Are podcast transcripts accurate?</h2>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate quis nemo praesentium non, odio consequatur necessitatibus ea id esse sed magni ipsam quod repellendus culpa eveniet voluptatibus doloribus.
          </p>
          <h2>Can I edit the transcript generated by the converter?</h2>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate quis nemo praesentium non, odio consequatur necessitatibus ea id esse sed magni ipsam quod repellendus culpa eveniet voluptatibus doloribus.
          </p>
          <h2>Is podcast transcription a paid service?</h2>
          <p className='mb-5'>This one is free.</p>
        </div>
        <div className="col md-auto"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
