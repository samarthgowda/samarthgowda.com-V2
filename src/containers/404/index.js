import React from "react";
import { Container } from "reactstrap";

const NotFoundPage = ({ location }) => {
  return (
    <Container className="py-5 text-center">
      <h3 className="py-md-5">
        Sorry. Page not found for{" "}
        <code>samarthgowda.com{location.pathname}</code>
      </h3>
    </Container>
  );
};

export default NotFoundPage;
