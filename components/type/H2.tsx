import React from "react";
import breakpoints from "../../styles/breakpoints";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const H2: React.FC<Props> = ({ children, style = {} }) => (
  <h2 style={style}>
    {children}
    <style jsx>{`
      h2 {
        font-size: 20px;
        font-weight: 500;
        margin: 0.67em 0;
        color: #323232;
      }

      @media (${breakpoints.laptop}) {
        h2 {
          font-size: 26px;
          background-color: red;
        }
      }
    `}</style>
  </h2>
);

export default H2;
