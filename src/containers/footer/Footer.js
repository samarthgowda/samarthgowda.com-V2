import React from "react";
import { Container, Row, Col, NavbarBrand } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className="font-small blue font-code">
      <Container className="py-3">
        <div className="text-center text-md-left">
          <Row>
            <Col md="6">
              <NavbarBrand
                onClick={scrollToTop}
                style={{ cursor: "pointer" }}
                className="text-decoration-none text-dark font-weight-extrabold"
              >
                Samarth Gowda
              </NavbarBrand>
            </Col>
            <Col md="6">
              <ul className="list-unstyled pt-2">
                <li className="d-inline-block mx-3 text-center">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    About
                  </Link>
                </li>
                <li className="d-inline-block mx-3 text-center">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Skills
                  </Link>
                </li>
                <li className="d-inline-block mx-3 text-center">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Projects
                  </Link>
                </li>
                <li className="d-inline-block mx-3 text-center">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
