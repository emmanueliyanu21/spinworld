import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminSideNav from '../components/AdminSideNav';

const AdminHomeScreen = () => {
  return (
    <Row>
      <Col md={2}>
        <AdminSideNav />
      </Col>
      <Col md={8}></Col>
    </Row>
  );
};

export default AdminHomeScreen;
