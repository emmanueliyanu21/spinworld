import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Dashboard from '../components/Dashboard';

const MyDashboardScreen = ({ history }) => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);
  return (
    <Container>
      <Row className='mt-4'>
        <Dashboard />
        <Col md={8}>
          <h1>My Dashboard</h1>
          <p>Home / Dashboard</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyDashboardScreen;
