import React from 'react';
import { Container } from 'react-bootstrap';

const Output = ({ outputData, value }) => {
  return (
    <Container className="mt-5">
    <div className="card p-4" >
      <h2>Prediction Results</h2>
      <pre>{outputData}</pre>
      <div>
       {value && <h3>Value: {value.toPrecision(3)}</h3>}
      </div>
    </div>
    </Container>
  );
}

export default Output;
