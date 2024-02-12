import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function TextOutputComponent() {
  const [clipboardState, setClipboardState] = useState(false);

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

          <textarea className='block bg-white text-black rounded form-control'
          value={clipboardState}
          onChange={(e)=>setClipboardState(e.target.value)}
            name="postContent"
            rows={20}
            cols={100}
        />
        <button onClick={handleCopy}>Copy</button>
        {/* </CopyToClipboard> */}
      </div>
      {/* id={data} */}
    </div>

  );
}

export default TextOutputComponent;
