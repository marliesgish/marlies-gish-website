import React from "react";
import CONSTANTS from "../../constants/constants";
import breakpoints from "../../styles/breakpoints";
import ConstraintWidth from "./ConstraintWidth";

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => (
  <main className="main">
    <ConstraintWidth maxWidth={CONSTANTS.pageWidth}>{children}</ConstraintWidth>
    <style jsx>{`
      .main {
        margin-top: -30px;
        margin-bottom: 30px;
        margin-left: 20px;
        margin-right: 20px;
      }

      @media (${breakpoints.tablet}) {
        .main {
          margin-left: 0;
          margin-right: 0;
        }
      }
    `}</style>
  </main>
);

export default Main;
