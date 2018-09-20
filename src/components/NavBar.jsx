import React, { Component } from "react";

import {
  Navbar,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Fa,
  Container
} from "mdbreact";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleNavbarClick() {
    this.setState({
      collapse: false
    });
  }
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleNavbarClick}
      />
    );
    return (
      <div>
        <Navbar dark expand="md" fixed="top" scrolling>
          <Container>
            <Link to="/">
              <strong className="white-text navbar-brand">Aissa Nouacer</strong>
            </Link>

            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/resume">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about">About</NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="!#">
                    <Fa icon="facebook" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="!#">
                    <Fa icon="twitter" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="!#">
                    <Fa icon="instagram" />
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
        {this.state.collapse && overlay}
      </div>
    );
  }
}

export default NavBar;
