import React from "react";
import { Link } from "react-scroll";
import { Container, Jumbotron } from "reactstrap";
import {
  ButtonGradientYellow,
  StandardButton
} from "../../styles/components/Button";
import { Display1 } from "../../styles/components/Text";

export default function Hero() {
  return (
    <Jumbotron className="bg-bluegradient" style={{ paddingTop: "6rem" }}>
      <Container className="text-white py-md-5 py-3 font-code">
        <Display1 className="font-weight-extrabold font-code">
          Samarth Gowda
        </Display1>
        <h4 className="font-weight-light">
          Student at Carnegie Mellon University
        </h4>
        <h4 className="font-weight-light">Founder @ Pralent</h4>

        <div className="pt-md-5">
          <ButtonGradientYellow
            tag={Link}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
            className="mx-2 my-1 my-md-0 shadow border-0 px-4 py-2 font-code text-dark"
            color="light"
          >
            LATEST PROJECTS
          </ButtonGradientYellow>
          <StandardButton
            tag={Link}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
            className="mx-2 my-1 my-md-0 shadow px-4 py-2 bg-white text-dark"
          >
            LEARN MORE
          </StandardButton>
        </div>
      </Container>
    </Jumbotron>
  );
}
