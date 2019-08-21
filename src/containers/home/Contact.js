import React, { Fragment, useState } from "react";
import {
  Form,
  FormGroup,
  Row,
  Col,
  Input,
  Label,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import { Display1 } from "../../styles/components/Text";
import { LargeInput } from "../../styles/components/Form";
import {
  ButtonGradientYellow,
  StandardButton
} from "../../styles/components/Button";
import {
  IoMdSend,
  IoMdMail,
  IoLogoLinkedin,
  IoLogoFacebook
} from "react-icons/io";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [formData, changeFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    changeFormData({ ...formData, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    fetch("../../", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };
  const { name, email, subject, message } = formData;

  return (
    <Fragment>
      <div className="bg-bluegradient py-md-5 py-3">
        <Container className="py-md-5 py-0">
          <Row className="text-center pb-3">
            <Col>
              <p className="mb-0 text-light">CONTACT</p>
              <Display1 className="font-weight-extrabold font-code text-white mb-3">
                Connect with Me
              </Display1>
              <ButtonGradientYellow
                className="text-dark my-2 px-4 mx-2"
                tag="a"
                href="mailto: sgowda@andrew.cmu.edu"
                id="emailtooltip"
              >
                <IoMdMail /> Email
              </ButtonGradientYellow>
              <StandardButton
                className="my-2 px-4 mx-2"
                color="dark"
                tag="a"
                href="https://www.linkedin.com/in/gowdasamarth"
                rel="noopener noreferrer"
                target="_blank"
                id="linkedintooltip"
              >
                <IoLogoLinkedin /> Linkedin
              </StandardButton>
              <StandardButton
                className="my-2 px-4 mx-2"
                color="light"
                tag="a"
                href="https://www.facebook.com/profile.php?id=100018648992211"
                rel="noopener noreferrer"
                target="_blank"
                id="facebooktooltip"
              >
                <IoLogoFacebook /> Facebook
              </StandardButton>
              <UncontrolledTooltip placement="bottom" target="emailtooltip">
                Email is the best way to reach out to me!
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="bottom" target="linkedintooltip">
                Feel free to connect & message me on Linkedin!
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="bottom" target="facebooktooltip">
                Feel free to message me on Facebook!
              </UncontrolledTooltip>
            </Col>
          </Row>
          {/* <Row className="mx-auto" style={{ maxWidth: "750px" }}>
            <Col>
              <Form className="text-white" onSubmit={e => onSubmit(e)}>
                <FormGroup>
                  <Label for="name">NAME</Label>
                  <LargeInput
                    value={name}
                    required
                    type="text"
                    name="name"
                    id="name"
                    onChange={e => handleChange(e)}
                    placeholder="Enter your name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">EMAIL</Label>
                  <LargeInput
                    value={email}
                    required
                    type="text"
                    name="email"
                    id="email"
                    onChange={e => handleChange(e)}
                    placeholder="Enter your email address"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">SUBJECT</Label>
                  <LargeInput
                    value={subject}
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={e => handleChange(e)}
                    placeholder="Enter your subject"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message">MESSAGE</Label>
                  <Input
                    value={message}
                    required
                    type="textarea"
                    name="message"
                    id="message"
                    rows={6}
                    onChange={e => handleChange(e)}
                    placeholder="Enter your message"
                  />
                </FormGroup>

                <div data-netlify-recaptcha="true"></div>

                <ButtonGradientYellow
                  className="text-dark my-2 px-4"
                  type="submit"
                >
                  <IoMdSend /> Send
                </ButtonGradientYellow>
              </Form>
            </Col>
          </Row> */}
        </Container>
      </div>
    </Fragment>
  );
};

export default Contact;
