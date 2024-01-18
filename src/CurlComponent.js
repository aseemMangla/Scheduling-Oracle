// src/components/CurlComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const CurlComponent = ({setOutputData, setValue}) => {
  const [inputData, setInputData] = useState({
    Tenant: '',
    WorkCode: '',
    Year: '',
    Month: '',
  });

  const handleChange = (e) => {
    setOutputData('')
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleFetchCurl = async () => {
    const { Tenant, WorkCode, Year, Month } = inputData;
    const headers = {
        'Authorization': 'Bearer ya29.a0AfB_byAKCbCJN5-PHjUsgxKaYu2ex9rxAXIckkn12Fb4WupeHZn2EOJpiByhVlG7j8knhm1aDsWRh1bgroTbfsOMu5VSiCNWVR4U2kMh8TOaWbwC5fB_kM0YAOiO3ncFSTraI0uP8ZP9QfaBYeq64ZvDU3JFukGLmBjr3ulbCA4aCgYKAYkSAQ8SFQHGX2MiSe0QoJg8gddrigpfpOM3dQ0178',
        'Content-Type': 'application/json'
      };
      const data = {
        "instances": [
          {
            "Tenant": Tenant,
            "WorkCode": WorkCode,
            "Year": Year,
            "Month": Month
          }
        ]
      };
      axios.post('https://us-central1-aiplatform.googleapis.com/v1/projects/541554200995/locations/us-central1/endpoints/5710469769505800192:predict', data, { headers })
        .then((response) => {
        console.log(response.data);
          setOutputData(JSON.stringify(response.data, null, 2));
          setValue(response.data?.predictions[0].value)
        })
        .catch((error) => {
          console.error(error);
        });
  };

  
  return (
    <Container className="mt-5">
      <Form className="card p-4">
        <h2 className="mb-4">Input Parameters</h2>
        <Form.Group className="mb-3">
          <Form.Label>Tenant</Form.Label>
          <Form.Control type="text" name="Tenant" value={inputData.Tenant} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Scheduling Type</Form.Label>
          <Form.Control type="text" name="WorkCode" value={inputData.WorkCode} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" name="Year" value={inputData.Year} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Month</Form.Label>
          <Form.Control type="text" name="Month" value={inputData.Month} onChange={handleChange} />
        </Form.Group>
        <Button style={{backgroundColor: '#005151'}} variant="success" onClick={handleFetchCurl}>See Predictions</Button>
      </Form>
    </Container>
  );
};

export default CurlComponent;