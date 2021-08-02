import React from "react";

const H2 = ({ children, style = {} }) => (
  <h2 style={style}>
    {children}
    <style jsx>{`
      h2 {
        font-size: 26px;
        font-weight: 500;
        margin: 0.67em 0;
        color: #323232;
      }
    `}</style>
  </h2>
);

export default H2;
