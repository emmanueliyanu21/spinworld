import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { updateUserProfile } from '../actions/userActions';
import Loader from '../components/Loader';

const EditUserScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [businessName, setBusinessName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [category, setCategory] = useState('');
  const [show, setShow] = useState(false);
  const { loading } = useSelector(state => state.userUpdateProfile);
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);

  const submitHandler = e => {
    e.preventDefault();
    if (
      businessName === '' ||
      businessAddress === '' ||
      businessNumber === '' ||
      category === ''
    ) {
      alert('All fileds are required');
    } else {
      dispatch(
        updateUserProfile({
          businessName,
          businessAddress,
          businessNumber,
          category,
        })
      );
    }
  };
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
            {loading ? (
              <Loader />
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Bussiness Name'
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Business Number</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter Business Number'
                    value={businessNumber}
                    onChange={e => setBusinessNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Business Address</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Business Address'
                    value={businessAddress}
                    onChange={e => setBusinessAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Business Category</Form.Label>
                  <Form.Control
                    as='select'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value=''>Select a category</option>
                    <option value='real estate'>Real Estate</option>
                    <option value='marketer'>Marketer</option>
                    <option value='driver'>Driver</option>
                  </Form.Control>
                </Form.Group>
                <Button
                  type='submit'
                  variant='primary'
                  className='btn btn-block'
                >
                  Register
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUserScreen;
