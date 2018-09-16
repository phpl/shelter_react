import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const navStyle = {
  backgroundColor: '#f1f1f1'
};

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar style={navStyle}>
        <Navbar.Header>
          <Navbar.Brand>
          <img src={require('./../photos/logo1.png')} alt="" style={{'height':'70px', 'marginTop':'-15px'}}/>
          </Navbar.Brand>
          <Navbar.Brand>
            <a href="/about"><strong>Shelter</strong></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/contact"
              to="/contact"
            >
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
