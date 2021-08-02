import React from "react";

interface Props {
  children?: React.ReactNode;
}

const SidePadding: React.FC<Props> = ({ children }) => (
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
