import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { userInfo: user } = useSelector(state => state.userLogin);

  return (
    <Col className='mt-3' md={4}>
      <Card>
        <Card.Img src='./images/user.jpeg' height='220px' />

        <Card.Body className='border-bottom'>
          <Card.Text>
            <h3>{user && user.name}</h3>
            <p>{user && user.email}</p>
          </Card.Text>
        </Card.Body>
        <Link
          className={`${location.pathname === '/dashboard' ? 'bg-info' : ''}`}
          to='/dashboard'
        >
          {' '}
          <Card.Body className='border-bottom'>
            <Card.Text>Dashboard</Card.Text>
          </Card.Body>
        </Link>
        <Link
          className={`${
            location.pathname === '/profile' ||
            location.pathname === '/edit-profile'
              ? 'bg-info'
              : ''
          }`}
          to='/profile'
        >
          {' '}
          <Card.Body className='border-bottom'>
            <Card.Text>My Profile</Card.Text>
          </Card.Body>
        </Link>
        <Link>
          <Card.Body className='border-bottom'>
            <Card.Text>Latest Update</Card.Text>
          </Card.Body>
        </Link>
        <Link>
          <Card.Body className='border-bottom'>
            <Card.Text>Recent Activities</Card.Text>
          </Card.Body>
        </Link>

        <Card.Body className='border-bottom'>
          <Card.Text>Log out</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dashboard;
