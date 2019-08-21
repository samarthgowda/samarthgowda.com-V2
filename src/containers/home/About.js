import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ProfileCard from "./ProfileCard";
import Education from "./Education";
import { Display1 } from "../../styles/components/Text";

const About = () => {
  return (
    <Fragment>
      <Container className="py-md-5 py-3">
        <Row className="text-center py-md-5">
          <Col>
            <p className="mb-0 text-muted">ABOUT</p>
            <Display1 className="font-weight-extrabold font-code">
              More About Me
            </Display1>
            <p className="lead my-3">
              Hello! I am a current undergraduate student interested in the
              intersection of technology, data, and entrepreneurship. Currently
              seeking a summer internship at a fast paced technical company to
              gain skills, mentorship, and expertise. I am skilled in Full Stack
              Web Development, Statistics, Entrepreneurship, Design, and Venture
              Capital. I love to work on new project ideas to build my skills
              and growth as an individual from hobby projects to a fully fledged
              startup.
            </p>
            <hr className="my-md-5" />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Education />
          </Col>
          <Col md="6">
            <ProfileCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
