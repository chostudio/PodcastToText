import { useState } from 'react';
import TextOutputComponent from './TextOutputComponent.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import axios from 'axios';

function App() {

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('mp3File', file);

    try {
      await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully');
    } catch (error) {
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
            <input className='form-control inline w-40 m-2 mt-5' type='file' name='audio' onChange={handleFileChange} />
            <button type="submit" className='m-2 inline btn btn-primary'>Submit</button>
          </form>
          {/* < TextOutputComponent /> */}

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
