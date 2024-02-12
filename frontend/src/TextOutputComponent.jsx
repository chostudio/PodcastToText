
function TextOutputComponent() {
  const data = 1;
  // make a variable forthe rows and col width or use css for responsive
  return (
    <div>
      <label htmlFor={data} className='block'>
        Output:
      </label>
      <br />
      <textarea className='block'
        id={data}
        name="postContent"
        rows={20}
        cols={100}
      />
    </div>

  );
}

export default TextOutputComponent;
