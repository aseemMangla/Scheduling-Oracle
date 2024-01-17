
import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'reactstrap';

const LeavePredictor = ({ setOutputData }) => {
    const [tenant, setTenant] = useState('');
    const [workCode, setWorkCode] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Tenant: ${tenant}, WorkCode: ${workCode}, Year: ${year}, Month: ${month}`);
      const headers = {
        'Authorization': 'Bearer ya29.a0AfB_byDLq0--PmOlyFuieJZ93LxNKnqd6tIh95JC4kR-_oeRNB62vyRLuK_i8n3nWPkgZnOkaeEAql2TTlbNE09RljmnQUheWVXVtmMUhcHfwNzW2FsF2Za_GL2X56z4Ue5N5h6DQKUqBixLRziyhV7ZFGLM3loX604PxPB4hwaCgYKAZMSAQ8SFQHGX2MikgY5xf2cZBAc3hmaZJ4Mvg0177',
        'Content-Type': 'application/json'
      };
      const data = {
        "instances": [
          {
            "Tenant": "test_tenant",
            "WorkCode": "Sick Leave",
            "Year": "2024",
            "Month": "Jul"
          }
        ]
      };
      axios.post('https://us-central1-aiplatform.googleapis.com/v1/projects/541554200995/locations/us-central1/endpoints/5710469769505800192:predict', data, { headers })
        .then((response) => {
          setOutputData(JSON.stringify(response.data, null, 2));
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <div className="background">
      <Container className="form-container">
        <h2 className="form-title">Leave Predictor</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tenant:</Form.Label>
            <Form.Control type="text" value={tenant} onChange={(event) => setTenant(event.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>WorkCode:</Form.Label>
            <Form.Control type="text" value={workCode} onChange={(event) => setWorkCode(event.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Year:</Form.Label>
            <Form.Control type="text" value={year} onChange={(event) => setYear(event.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Month:</Form.Label>
            <Form.Control type="text" value={month} onChange={(event) => setMonth(event.target.value)} required />
          </Form.Group>
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default LeavePredictor;
