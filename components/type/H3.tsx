import React from "react";
import breakpoints from "../../styles/breakpoints";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const H3: React.FC<Props> = ({ children, style = {} }) => (
  <h3 style={style}>
    {children}
    <style jsx>{`
      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
      }

      @media (${breakpoints.laptop}) {
        h3 {
          font-size: 20px;
        }
      }
    `}</style>
  </h3>
);

export default H3;
