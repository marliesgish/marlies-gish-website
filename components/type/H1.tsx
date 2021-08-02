import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const H1: React.FC<Props> = ({ children, style = {} }) => (
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

export default H1;
