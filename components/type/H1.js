import React from "react";
import PropTypes from "prop-types";

const H1 = ({ children, style = {} }) => (
  <h1 style={style}>
    {children}
    <style jsx>{`
      h1 {
        margin: 0;
        font-size: 32px;
        font-weight: 500;
        line-height: 1.5;
      }
    `}</style>
  </h1>
);

H1.propTypes = {
  siteTitle: PropTypes.string,
};

H1.defaultProps = {
  siteTitle: ``,
};

export default H1;
