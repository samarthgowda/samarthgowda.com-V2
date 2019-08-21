import React, { Fragment } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <Fragment>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Fragment>
  );
};

export default HomePage;
