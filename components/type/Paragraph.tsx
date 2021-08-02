import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ children }) => (
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
