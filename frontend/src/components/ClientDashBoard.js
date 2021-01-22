import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ClientDashBoard = () => {
  const location = useLocation();
  return (
    <Card>
      <Link
        className={`${location.pathname === '/dashboard' ? 'bg-info' : ''}`}
        to='#'
      >
        <Card.Body className='border-bottom'>
          <Card.Text>
            {' '}
            <i class='far fa-address-card pr-3'></i>Dashboard
          </Card.Text>
        </Card.Body>
      </Link>
      <Link
        className={`${
          location.pathname === '/property-dashboard' ? 'bg-info' : ''
        }`}
        to='/property-dashboard'
      >
        <Card.Body className='border-bottom'>
          <Card.Text>
            <i className='fab fa-pagelines pr-3'></i>Property
          </Card.Text>
        </Card.Body>
      </Link>
      <Link
        className={`${
          location.pathname === '/profile' ||
          location.pathname === '/edit-profile'
            ? 'bg-info'
            : ''
        }`}
        to='#'
      >
        <Card.Body className='border-bottom'>
          <Card.Text>
            <i className='fas fa-shopping-bag pr-3'></i>Orders
          </Card.Text>
        </Card.Body>
      </Link>
      <Link to='#'>
        <Card.Body className='border-bottom'>
          <Card.Text>
            <i class='fas fa-download pr-3'></i>Downloads
          </Card.Text>
        </Card.Body>
      </Link>
      <Link to='#'>
        <Card.Body className='border-bottom'>
          <Card.Text>
            <i className='fas fa-shopping-cart pr-3'></i>Cart
          </Card.Text>
        </Card.Body>
      </Link>
      <Link to='#'>
        <Card.Body className='border-bottom'>
          <Card.Text>
            <i className='fas fa-info-circle pr-3'></i>Inquiries
          </Card.Text>
        </Card.Body>
      </Link>
      <Link to='#'>
        <Card.Body className='border-bottom'>
          <Card.Text>
            <i className='fas fa-user pr-3'></i>Account Profile
          </Card.Text>
        </Card.Body>
      </Link>

      <Card.Body className='border-bottom'>
        <Card.Text>
          {' '}
          <i className='fas fa-sign-out-alt pr-3'></i>Log out
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClientDashBoard;
