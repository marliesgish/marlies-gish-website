import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ children, style = {} }) => (
  <li className="list-item" style={style}>
    {children}
    <style jsx>{`
      .list-item {
        marginbottom: 0;
      }
    `}</style>
  </li>
);

ListItem.propTypes = {
  siteTitle: PropTypes.string,
};

ListItem.defaultProps = {
  siteTitle: ``,
};

export default ListItem;
