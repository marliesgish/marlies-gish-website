import React from "react";
import ConstraintWidth from "./ConstraintWidth";

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => (
  <main className="main">
    <ConstraintWidth maxWidth={820}>{children}</ConstraintWidth>
    <style jsx>{`
      .main {
        margin-top: -30px;
        margin-bottom: 30px;
      }
    `}</style>
  </main>
);

export default Main;
