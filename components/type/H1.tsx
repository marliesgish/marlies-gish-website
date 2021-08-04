import classNames from "classnames";
import React from "react";
import breakpoints from "../../styles/breakpoints";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  bottomPadding?: boolean;
}

const H1: React.FC<Props> = ({ children, bottomPadding, style = {} }) => (
  <h1 className={classNames({ bottomPadding })} style={style}>
    {children}
    <style jsx>{`
      h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5;
      }

      .bottomPadding {
        margin-bottom: 1em;
      }

      @media (${breakpoints.laptop}) {
        h1 {
          font-size: 32px;
        }
      }
    `}</style>
  </h1>
);

export default H1;
