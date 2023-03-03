import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoWhite from "../../asset/image/logo_white.png";
import logoBlack from "../../asset/image/logo_black.png";

class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [logoWhite],
      navBarBack: "navBackground",
      navBarItem: "navItem",
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: [logoBlack],
        navBarBack: "navBackgroundScroll",
        navBarItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: [logoWhite],
        navBarBack: "navBackground",
        navBarItem: "navItem",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <Navbar
          className={this.state.navBarBack}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
              <img
                src={this.state.navBarLogo}
                alt="online-learning-rakyat-logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  HOME
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  ABOUT
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  SERVICES
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  COURSES
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  PORTFOLIO
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
