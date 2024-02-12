import { useForm } from 'react-hook-form';
import TextOutputComponent from './TextOutputComponent.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function App() {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div className='container'>
      <div className="row">
        <div className="col md-auto"></div>
        <div className='col-8 justify-content-center'>
          {/* put like a icon of a microphone to arrow to text drawing here */}
          <h1 className='text-center pt-5 mt-5 font-weight-bold'>PodcastToText</h1>
          <p className='text-center' >Get free transcription for subtitles.</p>
          <p className='text-center my-5'>Upload an mp3 file below or paste in a YouTube or Spotify link.</p>

          <form className='align-items-center' onSubmit={handleSubmit(onSubmit)}>
            <input className='form-control inline w-40 m-2 mt-5'{...register('value_name')} type='file' name='audio' />
            <button className='m-2 inline btn btn-primary'>Submit</button>
          </form>
          < TextOutputComponent />


          <br />
          <br />
          <p>some FAQ and stories about do you want text tracsctiptions subtitles</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate quis nemo praesentium non, odio consequatur necessitatibus ea id esse sed magni ipsam quod repellendus culpa eveniet voluptatibus doloribus nostrum.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quia eveniet, odit distinctio accusamus alias excepturi expedita nostrum. Earum quis facilis error laudantium adipisci vero consequuntur ut, distinctio sapiente odit?
          </p>
        </div>
        <div className="col md-auto"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
