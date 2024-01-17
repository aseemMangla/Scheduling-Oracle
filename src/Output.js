import React from 'react';
import { Container } from 'react-bootstrap';

function Output({ outputData }) {
  return (
    <Container className="mt-5">
    <div className="card p-4" >
      <h2>Output:</h2>
      <pre>{outputData}</pre>
      <div>
       {(outputData && outputData.predictions) && <h3>Value: {outputData?.predictions[0]?.value.toPrecision(3)}</h3>}
      </div>
    </div>
    </Container>
  );
}

export default Output;
