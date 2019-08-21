import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { StandardButton } from "../../styles/components/Button";
import { Display1 } from "../../styles/components/Text";
import ProjectCard from "./ProjectCard";
import { IoLogoGithub } from "react-icons/io";

const Projects = () => {
  return (
    <Fragment>
      <div className="bg-white py-md-5">
        <Container className="py-md-5 py-3">
          <Row className="text-center mb-md-5">
            <Col>
              <p className="mb-0 text-muted">PROJECTS</p>
              <Display1 className="font-weight-extrabold font-code">
                My Latest Projects
              </Display1>
              <p className="lead my-3">
                I love to work on projects on the side, and constantly learn new
                skills! Feel free to check out some of my latest projects that I
                have finished or ones that are currently in the works.
              </p>
              <StandardButton
                size="sm"
                color="dark"
                tag="a"
                href="https://www.github.com/samarthgowda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub /> My Github Page
              </StandardButton>
              <hr className="mt-md-5" />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ProjectCard
                title="Tennis Insights"
                skills="Python, Monte Carlo Simulations, Statistics, Google OAuth"
                description="Developed an application to provide real-time statistics and
                    recommendations to tennis players, parents, and coaches
                    utilizing Monte Carlo methods to create accurate simulations
                    of tennis matches. Created a seamless UI/UX experience and
                    integrated with the Google+ API to provide players with
                    trends of their key stats over time."
                github="https://github.com/samarthgowda/TennisInsights"
                href="https://www.youtube.com/watch?v=HVF5851zRSo&feature=youtu.be"
              />
            </Col>
            <Col md="6">
              <ProjectCard
                title="Pralent"
                skills="HTML/CSS, ReactJS, NodeJS, Express, SQL, UI/UX Design"
                description="Currently in progress of creating a web platform implementing project based learning through online challenges for students. Students can post about their projects, view other student profiles, get inspired, and learn all on our platform. Utilizing web frameworks to create a streamlined user interface for both students as well as recruiter dashboard. Implementing Machine Learning to save recruiters time finding prospective candidates."
              />
            </Col>
          </Row>
          <Row className="my-2 my-md-4">
            <Col md="6">
              <ProjectCard
                title="Create Reactstrap"
                skills="ReactJS, Javascript, Reactstrap, Bootstrap, React Router"
                description="After self-learning React JS, I worked on many projects to improve and solidify my skills. During this time I worked with many libraries and packages such as Redux, Reactstrap (Bootstrap), styled-components, etc. However, I found myself gravitating towards a few that I liked especially when creating a new project. Thus, I created the create-reactstrap boilerplate available to download from Github (MIT License). Feel free to download it and use it for your own projects. It comes with reactstrap, react router, prettier, 404 page, navbar, footer, etc."
                github="https://github.com/samarthgowda/create-reactstrap"
              />
            </Col>
            <Col md="6">
              <ProjectCard
                title="CampusSelect"
                skills="WordPress, UI/UX, Project Management, Entrepreneurship"
                description="Led the design and development of the web tool that provides a platform for high school students to connect with current undergraduate students through video chat to receive an authentic understanding of the student experience. Implemented a successful recruiting plan that resulted in the enrollment of 250+ Mentors from 50+ universities."
                href="https://www.campusselect.org"
              />
            </Col>
          </Row>
          <Row className="my-2 my-md-4">
            <Col md="6">
              <ProjectCard
                title="Undergraduate Entrepreneurship Association"
                skills="Leadership, Project Management, Fundraising, HTML / CSS"
                description="As board member and now President of the Undergraduate Entrepreneurship Association at CMU, I wanted to increase the overall online presence of the club. This would allow us to have a place where students can find weekly updates, new and upcoming events, and ways to get more involved with the startup ecosystem at CMU. A website was a must, and thus I got on the task of rethinking, redesigning, and redeveloping our website. The goal is to make the UEA the ultimate resource for students interested in entrepreneurship at CMU and this new website gets us a little closer to doing so."
                href="https://www.ueacmu.com"
                github="https://github.com/carnegieuea/ueacmu"
              />
            </Col>
            <Col md="6">
              <ProjectCard
                title="CMU Venture Challenge"
                skills="ReactJS, Netlify, Fundraising, Finances, Project Management"
                description="The CMU Venture Challenge was in dire need of a website update. As director of the event, through the Undergraduate Entrepreneurship Association, I took the initiative to completely redesign and redevelop the website in ReactJS and deploy our app to Netlify. Our new website will allow us to purusue higher fundraising goals, develop competition management tools in the future, and bring the best startups to pitch their ideas and creations at the CMU Venture Challenge."
                href="https://www.cmuvc.com"
                github="https://github.com/carnegieuea/cmuvc_2.0"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Projects;
