import React from "react";
import PropTypes from "prop-types";
import H1 from "./type/H1";

const Masthead = ({ headline, date, center }) => (
  <header className="header" style={{ textAlign: center ? "center" : "left" }}>
    <H1>{headline}</H1>
    {date && (
      <div className="date">
        <small>
          <time dateTime={date}>Posted on {date}</time>
        </small>
      </div>
    )}

    <style jsx>{`
      .header {
        margin-bottom: 50px;
      }

      .date {
        opacity: 0.5;
      }
    `}</style>
  </header>
);

Masthead.propTypes = {
  headline: PropTypes.string.isRequired,
};

Masthead.defaultProps = {
  headline: ``,
};

export default Masthead;
