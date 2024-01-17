import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurlComponent from './CurlComponent';
import Output from './Output';

function App() {
  const [outputData, setOutputData] = useState('');

  return (
    <div className="container">
      <h1>Scheduling Oracle</h1>
      <div className="d-flex justify-content-between"> 
      <div>
      <CurlComponent setOutputData={setOutputData} />
      </div>
      <div>
      <Output outputData={outputData} />
      </div>
      </div>
    </div>
  );
}

export default App;
