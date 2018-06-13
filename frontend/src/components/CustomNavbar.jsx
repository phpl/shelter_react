import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar inverse default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Shelter</Link>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
