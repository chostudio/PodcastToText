import { useState } from 'react';
import PropTypes from 'prop-types';

function TextOutputComponent({ text }) {
  const [clipboardState, setClipboardState] = useState(text);

  const handleCopy = () => {
    navigator.clipboard.writeText(clipboardState)
  }
  return (
    // htmlFor = { data }
    <div>
      <label className='block'>
        <h5 className="bold m-2 pt-3">Output:</h5>

      </label>
      <br />
      <div>
        {/* <CopyToClipboard onCopy={() => setClipboardState(true)}> */}

          <textarea className='mb-2 block bg-white text-black rounded form-control'
          value={clipboardState}
          onChange={(e)=>setClipboardState(e.target.value)}
            name="postContent"
            rows={10}
            cols={50}
        />
        <button className='mt-2' onClick={handleCopy}>Copy</button>
        {/* </CopyToClipboard> */}
      </div>
      {/* id={data} */}
    </div>

  );
}

// used to resolve the ESLint warning about missing prop validation for the 'text' prop for this component
TextOutputComponent.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextOutputComponent;
