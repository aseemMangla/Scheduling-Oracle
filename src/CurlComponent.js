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
    setOutputData('');
    setValue(0);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleFetchCurl = async () => {
    const { Tenant, WorkCode, Year, Month } = inputData;
    const headers = {
        'Authorization': 'Bearer ya29.a0AfB_byAzDywLnZ_IfbtvJOHkZxK1Os3E5H5jpckO9O6qHfs-GwBcsAcVQ5sU2rlw7bVH9ZK7TlowANhoSdQ-cWOmiRAuQiUbTx-jsze50EUR_X8eVMMMqN6qxF0gEyGITVst2tWK8vkqzDyW5Kz1bZBhDLbnp7u8FrYMF9pgPQaCgYKAc4SAQ8SFQHGX2MigxjXf_DXEMBOmdHIvy8Oiw0177',
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
      await axios.post('https://us-central1-aiplatform.googleapis.com/v1/projects/541554200995/locations/us-central1/endpoints/5710469769505800192:predict', data, { headers })
        .then((response) => {
        console.log(response.data);
          setOutputData(JSON.stringify(response.data, null, 2));
          setValue(response.data?.predictions[0].value)
        })
        .catch((error) => {
          console.error(error);
        });
  };

  console.log(inputData);
  return (
    <Container className="mt-5">
      <Form className="card p-4" >
        <h2 className="mb-4">Input Parameters</h2>
        <Form.Group className="mb-3">
          <Form.Label>Tenant</Form.Label>
          <Form.Control required={true} type="text" name="Tenant" value={inputData.Tenant} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Scheduling Type</Form.Label>
          <Form.Control required={true} type="text" name="WorkCode" value={inputData.WorkCode} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control required={true} type="number" placeholder='Please Enter a Number' name="Year" value={inputData.Year} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Month</Form.Label>
          <Form.Control required={true} type="text" name="Month" value={inputData.Month} onChange={handleChange} />
        </Form.Group>
        <Button style={{backgroundColor: '#005151'}} onClick={handleFetchCurl}>See Predictions</Button>
      </Form>
    </Container>
  );
};

export default CurlComponent;