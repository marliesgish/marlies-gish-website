import React from "react";
import PropTypes from "prop-types";

const UnorderedList = ({ children, style = {} }) => (
  <ul className="unordered-list" style={style}>
    {children}
    <style jsx>{`
      .unordered-list {
        margin-left: 0;
        margin-bottom: 0;
        list-style: none;
        display: flex;
      }
    `}</style>
  </ul>
);

UnorderedList.propTypes = {
  siteTitle: PropTypes.string,
};

UnorderedList.defaultProps = {
  siteTitle: ``,
};

export default UnorderedList;
