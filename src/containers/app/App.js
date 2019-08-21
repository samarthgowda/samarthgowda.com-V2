import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MainNavbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import HomePage from "../home";
import NotFoundPage from "../404";
import Resume from "../Resume";

function App() {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <MainNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/resume" component={Resume} /> */}
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
