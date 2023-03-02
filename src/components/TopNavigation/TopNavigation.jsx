import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#home">Online Learning Rakyat</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#deets">HOME</Nav.Link>
                <Nav.Link href="#deets">ABOUT</Nav.Link>
                <Nav.Link href="#deets">SERVICES</Nav.Link>
                <Nav.Link href="#deets">COURSES</Nav.Link>
                <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                <Nav.Link href="#deets">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
