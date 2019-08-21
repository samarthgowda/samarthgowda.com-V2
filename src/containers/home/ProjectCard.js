import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardHeader, Badge } from "reactstrap";
import { IoLogoGithub } from "react-icons/io";

const ProjectCard = ({ title, skills, description, href, github }) => {
  let link;
  if (github && !href) {
    link = github;
  } else {
    link = href;
  }
  return (
    <Card className="rounded shadow border-0 h-100">
      <CardHeader className="bg-white border-0 pb-0">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className={`text-decoration-none text-dark ${github &&
            "d-inline-block"}`}
        >
          <h4 className="font-weight-semibold mb-0 font-code">
            {title}
            {!href && !github && (
              <small>
                <Badge
                  color="dark"
                  className="mx-2"
                  style={{ borderRadius: "20px", fontSize: "0.75rem" }}
                >
                  In Progress
                </Badge>
              </small>
            )}
          </h4>
        </a>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-decoration-none text-dark mx-2 d-inline-block"
          >
            <IoLogoGithub />
          </a>
        )}
      </CardHeader>
      <CardBody className="pt-0">
        <small
          className="text-primary font-code"
          style={{ textTransform: "uppercase" }}
        >
          {skills}
        </small>
        <p className="my-2">{description}</p>
      </CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  href: PropTypes.string,
  description: PropTypes.string.isRequired,
  github: PropTypes.string
};

export default ProjectCard;
