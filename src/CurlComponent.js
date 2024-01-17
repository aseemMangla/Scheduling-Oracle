// src/components/CurlComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const CurlComponent = ({setOutputData}) => {
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

  const handleFetchCurl = () => {
    const { Tenant, WorkCode, Year, Month } = inputData;
    const headers = {
        'Authorization': 'Bearer ya29.a0AfB_byCR9molSAFX-P8JNSqYOIetp7iSy1FoV5aL3DftV1PZ9BNI0uTKU-cr4UoBHgo--4JutbJKlm0wnAsInI28yWbA16WArLvIRlBDahlVCYgEFOqFuwXwBo6cM_LWoR5xHE5nLBDQEN4LV4uHILtcOmJtgM-kN-QcL42kRwaCgYKAZsSAQ8SFQHGX2MiMZMcJDQO75UWJtMa2K5BGg0177',
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
        })
        .catch((error) => {
          console.error(error);
        });
  };

  
  return (
    <Container className="mt-5">
      <Form className="card p-4">
        <h2 className="mb-4">Scheduling Oracle</h2>
        <Form.Group className="mb-3">
          <Form.Label>Tenant:</Form.Label>
          <Form.Control type="text" name="Tenant" value={inputData.Tenant} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>WorkCode:</Form.Label>
          <Form.Control type="text" name="WorkCode" value={inputData.WorkCode} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year:</Form.Label>
          <Form.Control type="text" name="Year" value={inputData.Year} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Month:</Form.Label>
          <Form.Control type="text" name="Month" value={inputData.Month} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleFetchCurl}>Fetch Curl</Button>
      </Form>
    </Container>
  );
};

export default CurlComponent;