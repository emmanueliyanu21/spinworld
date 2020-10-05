import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const LogoHeader = () => {
  return (
    <div>
      <Navbar expand="lg" className="" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home" className="logo-holder">
            <img
              src="./image/logo-folder/logo.jpg"
              className="img-fluid"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto logo-header-icon">
              <Nav.Link href="#home">
                <i className="fas fa-phone"></i> 070-163-2286
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fas fa-envelope"></i> Info@spinworld.com
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LogoHeader;
