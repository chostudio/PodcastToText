
function TextOutputComponent() {
  const data = 1;
  // make a variable forthe rows and col width or use css for responsive
  return (
    <div>
      <label htmlFor={data} className='block'>
        <h5 className="bold m-2 pt-3">Output:</h5>

      </label>
      <br />
      <textarea className='block bg-white text-black rounded form-control'
        id={data}
        name="postContent"
        rows={20}
        cols={100}
      />
    </div>

  );
}

export default TextOutputComponent;
