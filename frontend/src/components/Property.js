import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Property = ({ property }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/property/${property._id}`}>
        <Card.Img src={property.image[0]} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${property._id}`}>
          <Card.Title as='div'>
            <strong>{property.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>${property.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Property;
