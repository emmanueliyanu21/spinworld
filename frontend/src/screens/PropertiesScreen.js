import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProperties } from '../actions/propertyAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Property from '../components/Property';
const PropertiesScreen = ({ match }) => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [furnished, setFurnished] = useState('');
  const [serviced, setServiced] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProperties());
  }, [dispatch]);
  const { error, loading, properties } = useSelector(
    state => state.propertyList
  );

  const submitHandler = e => {
    e.preventDefault();
    console.log(bedroom);
    dispatch(listProperties(category, type, bedroom, furnished, serviced));
    setCategory('');
    setType('');
    setBedroom('');
    setFurnished('');
    setServiced('');
  };
  return (
    <Container>
      <h1>Properties</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={8}>
            <Row>
              {properties && properties.length === 0 && (
                <Message variant='danger'>
                  No property match your search criteria{' '}
                  <Link to='/properties'>Go back</Link>
                </Message>
              )}
              {properties &&
                properties.map(property => (
                  <Col key={property._id} sm={12} md={6} lg={4} xl={4}>
                    <Property property={property} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <Card>
              <h4>Advance filter</h4>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    value={category}
                    as='select'
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value=''>All category</option>
                    <option value='sale'>For Sale</option>
                    <option value='rent'>For Rent</option>
                  </Form.Control>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Types</Form.Label>
                      <Form.Control
                        as='select'
                        value={type}
                        onChange={e => setType(e.target.value)}
                      >
                        <option value=''>All Types</option>
                        <option value='land'>Land</option>
                        <option value='flat'>Flat</option>
                      </Form.Control>
                    </Form.Group>{' '}
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Bedrooms</Form.Label>
                      <Form.Control
                        as='select'
                        value={bedroom}
                        onChange={e => setBedroom(e.target.value)}
                      >
                        <option value=''>Any</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                      </Form.Control>
                    </Form.Group>{' '}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Furnishing</Form.Label>
                      <Form.Control
                        as='select'
                        value={furnished}
                        onChange={e => setFurnished(e.target.value)}
                      >
                        <option value=''>Any</option>
                        <option value={true}>Furnished</option>
                        <option value={false}>Unfurnished</option>
                      </Form.Control>
                    </Form.Group>{' '}
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>servicing</Form.Label>
                      <Form.Control
                        as='select'
                        value={serviced}
                        onChange={e => setServiced(e.target.value)}
                      >
                        <option value=''>Any</option>
                        <option value={true}>Serviced</option>
                        <option value={false}>Unserviced</option>
                      </Form.Control>
                    </Form.Group>{' '}
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Keywords</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='enter search keyword'
                  ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='success'>
                  Search
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PropertiesScreen;
