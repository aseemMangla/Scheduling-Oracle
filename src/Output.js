import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Output = ({ outputData, value }) => {

  const [seeResults, setSeeResults] = useState(false)
  const toggle = () => {
    setSeeResults(!seeResults);
  }

  return (
    <Container className="mt-5">
    <div className="card p-4" >
      <h2>Prediction Results</h2>
      <div>
       {value && <h3>Value: {value.toPrecision(3)}</h3>}
      </div>
      <div>
      <Button id="Popover1" style={{backgroundColor: '#005151', margin: 5}} variant="success" onClick={() => toggle()}>
        See Result Data
      </Button>
      <div>
      {seeResults && <pre>{outputData}</pre>}
    </div>
      </div>
    </div>
    </Container>
  );
}

export default Output;
