import React from "react";

const SidePadding = ({ children, style = {} }) => (
  <div className="side-padding">
    {children}
    <style jsx>{`
      .side-padding {
        padding-left: 20;
        padding-right: 20;
      }
    `}</style>
  </div>
);

export default SidePadding;
