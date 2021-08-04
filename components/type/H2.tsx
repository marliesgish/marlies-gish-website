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
        margin: 0;
        padding: 0;
        font-size: 22px;
        font-weight: 500;
        line-height: 1.2;
      }

      @media (${breakpoints.laptop}) {
        h2 {
          font-size: 26px;
        }
      }
    `}</style>
  </h2>
);

export default H2;
