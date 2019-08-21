import React, { Fragment } from "react";
import {
  CardDeck,
  CardHeader,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import { Display1 } from "../../styles/components/Text";
import { IoMdCode, IoIosBusiness, IoMdHammer } from "react-icons/io";

const Skills = () => {
  return (
    <Fragment>
      <div className="bg-light py-md-5">
        <Container className="py-md-5 py-3">
          <Row className="text-center mb-md-5">
            <Col>
              <p className="mb-0 text-muted">SKILLS</p>
              <Display1 className="font-weight-extrabold font-code">
                My Top Skills
              </Display1>
            </Col>
          </Row>

          <CardDeck>
            <Card className="border-0 bg-white shadow text-center py-4 px-md-2 font-code">
              <CardHeader className="border-0 bg-white">
                <IoMdCode
                  style={{ fontSize: "64px" }}
                  className="text-primary"
                />
              </CardHeader>
              <CardBody className="py-0">
                <small
                  className="text-primary"
                  style={{ letterSpacing: "4px" }}
                >
                  LANGUAGES / FRAMEWORKS
                </small>
                <ul className="list-unstyled mt-md-4">
                  <li className="my-3">
                    <h5>Python</h5>
                  </li>
                  <li className="my-3">
                    <h5>Javascript</h5>
                  </li>
                  <li className="my-3">
                    <h5>ReactJS & Redux</h5>
                  </li>
                  <li className="my-3">
                    <h5>HTML / CSS</h5>
                  </li>
                  <li className="my-3">
                    <h5>NodeJS</h5>
                  </li>
                  <li className="my-3">
                    <h5>ExpressJS</h5>
                  </li>
                  <li className="my-3">
                    <h5>SQL</h5>
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="border-0 bg-white shadow text-center py-4 px-md-2 font-code">
              <CardHeader className="border-0 bg-white">
                <IoIosBusiness
                  style={{ fontSize: "64px" }}
                  className="text-primary"
                />
              </CardHeader>
              <CardBody className="py-0">
                <small
                  className="text-primary"
                  style={{ letterSpacing: "4px" }}
                >
                  BUSINESS
                </small>
                <ul className="list-unstyled mt-md-4">
                  <li className="my-3">
                    <h5>Microsoft Excel</h5>
                  </li>
                  <li className="my-3">
                    <h5>Venture Capital</h5>
                  </li>
                  <li className="my-3">
                    <h5>Entrepreneurship</h5>
                  </li>
                  <li className="my-3">
                    <h5>Public Speaking</h5>
                  </li>
                  <li className="my-3">
                    <h5>Presentation Building</h5>
                  </li>
                  <li className="my-3">
                    <h5>Teamwork</h5>
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="border-0 bg-white shadow text-center py-4 px-md-2 font-code">
              <CardHeader className="border-0 bg-white">
                <IoMdHammer
                  style={{ fontSize: "64px" }}
                  className="text-primary"
                />
              </CardHeader>
              <CardBody className="py-0">
                <small
                  className="text-primary"
                  style={{ letterSpacing: "4px" }}
                >
                  MISCELLANEOUS / HOBBIES
                </small>
                <ul className="list-unstyled mt-md-4">
                  <li className="my-3">
                    <h5>WordPress</h5>
                  </li>
                  <li className="my-3">
                    <h5>UI / UX Design</h5>
                  </li>
                  <li className="my-3">
                    <h5>Adobe Suite</h5>
                  </li>
                  <li className="my-3">
                    <h5>Final Cut Pro X</h5>
                  </li>
                  <li className="my-3">
                    <h5>Teaching</h5>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </Fragment>
  );
};

export default Skills;
