import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurlComponent from './CurlComponent';
import Output from './Output';

function App() {
  const [outputData, setOutputData] = useState('');
  const [value, setValue] = useState(0)

  return (
    <div className="container">
      <h1>Scheduling Oracle</h1>
      <div className="d-flex justify-content-between"> 
      <div>
      <CurlComponent setOutputData={setOutputData} setValue={setValue} />
      </div>
      <div>
      <Output outputData={outputData} value={value}/>
      </div>
      </div>
    </div>
  );
}

export default App;
