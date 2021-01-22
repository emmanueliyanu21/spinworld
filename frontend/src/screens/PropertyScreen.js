import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProperty } from '../actions/propertyAction';
import Loader from '../components/Loader';
import MapContainer from '../components/MapContainer';
const PropertyScreen = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();
  const { property, loading } = useSelector(state => state.propertySingle);
  useEffect(() => {
    dispatch(getProperty(id));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container fluid>
      <Row>
        <Col md={8} className='mt-4'>
          <Card>
            <Card.Body>
              <Card.Img height='400px' src={property && property.image[0]} />
              <h2>{property && property.title}</h2>
              <h3>${property && property.price}</h3>
              <p>{property && property.description}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          {' '}
          <MapContainer
            lat={property && property.latitude}
            lng={property && property.longitude}
          />{' '}
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyScreen;
