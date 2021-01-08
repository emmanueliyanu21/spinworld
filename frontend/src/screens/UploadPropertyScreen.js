import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Geocode from 'react-geocode';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { createProperty } from '../actions/propertyAction';
import { CREATE_PROPERTY_RESET } from '../constants/propertyConstant';
import ClientDashBoard from '../components/ClientDashBoard';
const UploadPropertyScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [room, setRoom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [toilet, setToilet] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [geocode, setGeocode] = useState('');

  const { error, loading, success } = useSelector(
    state => state.propertyCreate
  );

  useEffect(() => {
    if (success) {
      history.push('/properties');
    }
  }, [success]);
  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      createProperty({
        title,
        price,
        type,
        room,
        bathroom,
        toilet,
        description,
        category,
      })
    );
  };
  const onChangeHandler = e => {
    setGeocode(e.target.value);
    Geocode.fromAddress(geocode).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
  };
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={3}>
          <ClientDashBoard />
        </Col>
        <Col md={9}>
          {/* <Link to='/properties' className='btn btn-light my-3'>
            Go Back
          </Link> */}

          <h1>Property</h1>
          {error && <Message>{error}</Message>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={e => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                required
                as='select'
                placeholder='Enter category example rent, sale'
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value='rent'>rent</option>
                <option value='sale'>sale</option>
                <option value='short let'>short let</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='type'>
              <Form.Label>Type</Form.Label>
              <Form.Control
                required
                as='select'
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <option value='house'>land</option>
                <option value='flat'>flat</option>
                <option value='house'>house</option>
              </Form.Control>
              <Form.Group controlId='Address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Address'
                  value={description}
                  onChange={onChangeHandler}
                ></Form.Control>
              </Form.Group>
            </Form.Group>
            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={e => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Number of Bedrooms</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter number of bedrooms'
                value={room}
                onChange={e => setRoom(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='bathroom'>
              <Form.Label>Number of bathroom</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Number of bathroom'
                value={bathroom}
                onChange={e => setBathroom(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='toilet'>
              <Form.Label>Number of toilet</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Number of toilet'
                value={toilet}
                onChange={e => setToilet(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter description'
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button disabled={loading} type='submit' variant='success'>
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadPropertyScreen;
