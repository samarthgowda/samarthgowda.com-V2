import React, { Fragment } from "react";

const Education = () => {
  return (
    <Fragment>
      <div className="my-2">
        <h5>EDUCATION</h5>
      </div>
      <div>
        <small>MAY 2022</small>
        <h3 className="mb-0">Carnegie Mellon University</h3>
        <p className="mb-0 font-weight-bold text-primary font-code">
          Statistics and Machine Learning <br /> Computer Science Minor +
          Business Administration Minor
        </p>

        <p className="my-3">
          Outside of regular school work, I am the President of the
          Undergraduate Entrepreneurship Association coordinating the growth of
          the organization and various entrepreneurial events across campus.
          Additionally, I spearhead the CMU Venture Challenge, CMU's premier
          undergraduate startup pitch competition. I am also a Venture Capital
          Analyst at Scottie Ventures where I work with venture capitalists to
          identify and evaluate potential startup investment opportunities.{" "}
        </p>
      </div>
      <hr />
      <div>
        <small>SEPT 2014 - JUNE 2018</small>
        <h3 className="mb-0">Harriton High School of Lower Merion</h3>
        <p className="mb-0 font-weight-bold text-primary font-code">
          Philadelphia, PA
        </p>

        <ul className="my-3">
          <li>Varsity Tennis Captain - #1 Singles</li>
          <li>Technology Student Association - 50+ Top 10 Awards</li>
          <li>
            {" "}
            Leukemia & Lymphoma Society Students of the Year, Campaign Manager -
            1st Prize
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Education;
