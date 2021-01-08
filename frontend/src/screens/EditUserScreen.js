import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const EditUserScreen = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Row className='mt-4'>
        <Dashboard />
        <Col md={8}>
          <h1>Edit Profile</h1>
          <p>Home / Profile / Edit</p>

          <Form.Check
            type='switch'
            id='seller'
            label='Become a seller'
            checked={show}
            onChange={() => setShow(!show)}
          />
          <Card className={`${show ? 'visible' : 'invisible'}`}>
            <Form>
              <Form.Group>
                <Form.Label>Bussiness Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Bussiness Name' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bussiness Number</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Bussiness Number'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bussiness Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Bussiness Address'
                />
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUserScreen;
