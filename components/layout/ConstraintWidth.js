import React from "react";
import PropTypes from "prop-types";

const ConstraintWidth = ({ children, maxWidth = 0 }) => (
  <div className="constraint-width">
    {children}
    <style jsx>{`
      .constraint-width {
        max-width: ${maxWidth}px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
);

ConstraintWidth.propTypes = {
  siteTitle: PropTypes.string,
};

ConstraintWidth.defaultProps = {
  siteTitle: ``,
};

export default ConstraintWidth;
