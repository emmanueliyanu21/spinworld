import React from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const NavbarHeader = () => {
  const location = useLocation();
  if (
    location.pathname === '/admin' ||
    location.pathname === '/admin/property' ||
    location.pathname === '/admin/customer'
  ) {
    return null;
  }
  return (
    <div>
      <Navbar expand='lg' className='header-bk-color' collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>HOME</Nav.Link>
              <Nav.Link href='#link'>LAND</Nav.Link>
              <Nav.Link href='#home'>MARKETER</Nav.Link>
              <Nav.Link href='#link'>DESIGNS</Nav.Link>
              <Nav.Link href='#link'>DRIVER</Nav.Link>
              <Nav.Link href='#link'>BLOG</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <i className='fas fa-search'></i>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
