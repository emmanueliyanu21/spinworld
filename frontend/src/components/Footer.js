import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/admin/orders') {
    return null;
  }
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>Copyright &copy; Spinworld</Col>
      </Row>
    </Container>
  );
};

export default Footer;
