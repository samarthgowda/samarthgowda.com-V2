import React, { Fragment, useState } from "react";
import { Form, FormGroup, Row, Col, Input, Label, Container } from "reactstrap";
import { Display1 } from "../../styles/components/Text";
import { LargeInput } from "../../styles/components/Form";
import { ButtonGradientYellow } from "../../styles/components/Button";
import { IoMdSend } from "react-icons/io";

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

  const onSubmit = e => {
    console.log(...formData);
    fetch("../../", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };
  const { name, email, subject, message } = formData;

  return (
    <Fragment>
      <div className="bg-bluegradient py-md-5 py-3">
        <Container className="py-md-5 py-0">
          <Row className="text-center pb-3">
            <Col>
              <p className="mb-0 text-light">CONTACT</p>
              <Display1 className="font-weight-extrabold font-code text-white">
                Connect with Me
              </Display1>
            </Col>
          </Row>
          <Row className="mx-auto" style={{ maxWidth: "750px" }}>
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

                <FormGroup>
                  <ButtonGradientYellow
                    className="text-dark my-2 px-4"
                    type="submit"
                  >
                    <IoMdSend /> Send
                  </ButtonGradientYellow>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Contact;
