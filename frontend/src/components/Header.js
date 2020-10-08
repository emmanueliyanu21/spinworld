import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="header-bk-color" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">REAL ESTATE</Nav.Link>
              <Nav.Link href="#link">CONSULTANT</Nav.Link>
              <Nav.Link href="#home">DESIGNER</Nav.Link>
              <Nav.Link href="#link">MARKETER</Nav.Link>
              <Nav.Link href="#link">BUILDING MATERIALS</Nav.Link>
            </Nav>
            <Nav className="ml-auto header-icon">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
