import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
  cursor: pointer;
`;

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" className="shadow" fixed="top">
        <Container>
          <NavbarBrand
            className="font-weight-bold font-code text-white"
            onClick={this.scrollToTop}
            style={{ cursor: "pointer" }}
          >
            Samarth Gowda
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="border-0" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ fontSize: "0.9rem" }}>
              <NavItem className="mx-md-2">
                <NavLinkStyled
                  tag={Link}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </NavLinkStyled>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLinkStyled
                  tag={Link}
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </NavLinkStyled>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLinkStyled
                  tag={Link}
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </NavLinkStyled>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLinkStyled
                  tag={Link}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </NavLinkStyled>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
