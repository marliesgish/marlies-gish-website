import React from "react";

const Paragraph = ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: 18px;
        line-height: 1.8;
        margin-bottom: 2rem;
      }
    `}</style>
  </p>
);

export default Paragraph;
