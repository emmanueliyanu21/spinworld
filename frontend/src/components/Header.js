import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="header-bk-color" collapseOnSelect>
        <div className="container">
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
              <Nav.Link href="">
                <i className="fas fa-facebook-f"></i>
              </Nav.Link>
              <Nav.Link href="">
                <i className="fas fa-twitter"></i>
              </Nav.Link>
              <Nav.Link href="">
                <i className="fas fa-instagram"></i>
              </Nav.Link>
              <Nav.Link href="">
                <i className="fas fa-linkedin"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
