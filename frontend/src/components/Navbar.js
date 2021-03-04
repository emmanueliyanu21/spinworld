import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

const NavbarHeader = () => {
  return (
    <div>
      <Navbar expand="lg" className="header-bk-color" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">LAND</Nav.Link>
              <Nav.Link href="/">MARKETER</Nav.Link>
              <Nav.Link href="/">DESIGNS</Nav.Link>
              <Nav.Link href="/">DRIVER</Nav.Link>
              <Nav.Link href="/">BLOG</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <i className="fas fa-search"></i>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
