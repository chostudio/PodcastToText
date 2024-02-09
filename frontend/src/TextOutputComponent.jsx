import { useForm } from 'react-hook-form';

function App() {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  };
  return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('value_name')} type='file' name='audio' />
          <button>Submit</button>
        </form>
  );
}

export default App;
