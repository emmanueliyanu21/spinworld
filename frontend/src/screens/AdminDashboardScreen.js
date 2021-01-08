import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Row>
      <Col md={2}>
        <nav className='s-sidebar__nav'>
          <ul>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-home'></i>
                <em>Home</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-user'></i>
                <em>Products</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Orders</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Vendors</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Customers</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Reports</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Settings</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Capability</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Withdrawal</em>
              </a>
            </li>
            <li>
              <a className='s-sidebar__nav-link white' href='#0'>
                <i className='fa fa-camera'></i>
                <em>Logout</em>
              </a>
            </li>
          </ul>
        </nav>
      </Col>
      <Col md={8}></Col>
    </Row>
  );
};

export default AdminDashboard;
