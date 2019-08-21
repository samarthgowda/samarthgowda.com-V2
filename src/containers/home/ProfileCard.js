import React, { Fragment, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  UncontrolledTooltip
} from "reactstrap";
import { ButtonGradientYellow } from "../../styles/components/Button";
import {
  IoMdBriefcase,
  IoMdBuild,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdMail
} from "react-icons/io";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import headshot from "../../assets/images/headshot.png";
import SamarthGowdaResume from "../../assets/SamarthGowdaResume.pdf";
import styled from "styled-components";

const CardProfileImage = styled.div`
  img {
    max-width: 180px;
    margin-top: -5rem;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      transition: 0.3s;
    }
  }
`;

const ProfileCard = () => {
  const [skills] = useState([
    "Python",
    "Javascript",
    "React",
    "HTML / CSS",
    "Redux",
    "SQL",
    "NodeJS",
    "Express",
    "Microsoft Excel",
    "Venture Capital",
    "Entrepreneurship",
    "Public Speaking"
  ]);
  return (
    <>
      <Fragment>
        <Card className="shadow border-0 pb-4" style={{ marginTop: "5rem" }}>
          <CardHeader className="text-center bg-white border-0">
            <CardProfileImage>
              <img
                alt="samarth_headshot"
                className="rounded-circle"
                src={headshot}
              />
            </CardProfileImage>
          </CardHeader>

          <CardBody>
            <Row>
              <Col>
                <div className="d-flex justify-content-center">
                  <ul className="list-unstyled list-inline text-warning">
                    <li className="list-inline-item mr-3">
                      <h3 id={`status`}>
                        <IoMdBriefcase />
                      </h3>
                    </li>
                    <li className="list-inline-item mr-3">
                      <h3 id={`skills`}>
                        <IoMdBuild />
                      </h3>
                    </li>

                    <li className="list-inline-item mr-3">
                      <a
                        href={`https://www.github.com/samarthgowda`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning"
                      >
                        <h3 id={`github`}>
                          <IoLogoGithub />
                        </h3>
                      </a>
                    </li>

                    <li className="list-inline-item mr-3">
                      <a
                        href={`https://www.linkedin.com/in/gowdasamarth`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning"
                      >
                        <h3 id={`linkedin`}>
                          <IoLogoLinkedin />
                        </h3>
                      </a>
                    </li>
                    <li className="list-inline-item mr-3">
                      <a
                        href={`mailto: sgowda@andrew.cmu.edu`}
                        className="text-warning"
                      >
                        <h3>
                          <IoMdMail />
                        </h3>
                      </a>
                    </li>
                  </ul>
                  <UncontrolledTooltip placement="bottom" target={`status`}>
                    <span>Founder</span>
                    <span>@ Pralent</span>
                  </UncontrolledTooltip>
                  <UncontrolledTooltip
                    placement="bottom"
                    target={`skills`}
                    style={{ minWidth: "300px" }}
                  >
                    <span>Skills: {skills.join(", ")}</span>
                    )}
                  </UncontrolledTooltip>

                  <UncontrolledTooltip placement="bottom" target={`github`}>
                    <span>/samarthgowda</span>
                  </UncontrolledTooltip>

                  <UncontrolledTooltip placement="bottom" target={`linkedin`}>
                    <span>/in/gowdasamarth</span>
                  </UncontrolledTooltip>
                </div>
              </Col>
            </Row>
            <div className="text-center">
              <h5 style={{ fontWeight: "600" }} className="mb-0">
                Samarth Gowda
              </h5>
              <small className="mb-0">Philadelphia, PA</small>

              <div className="mt-4">
                <h5 style={{ fontWeight: "600" }} className="mb-0">
                  Statistics and Machine Learning
                </h5>
                <p className="mb-0">Carnegie Mellon University</p>{" "}
              </div>
            </div>
          </CardBody>
          <CardFooter className="border-0 bg-white text-center">
            <ButtonGradientYellow
              className="mx-2 px-4 border-0 text-dark font-code"
              tag="a"
              href={SamarthGowdaResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </ButtonGradientYellow>

            <ButtonGradientYellow
              className="mx-2 px-4 border-0 text-dark font-code"
              tag={ScrollLink}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              CONTACT
            </ButtonGradientYellow>
          </CardFooter>
        </Card>
      </Fragment>
    </>
  );
};

export default ProfileCard;
