import React from "react";

interface Props {
  children?: React.ReactNode;
}

const SidePadding: React.FC<Props> = ({ children }) => (
  <div className="side-padding">
    {children}
    <style jsx>{`
      .side-padding {
        padding-left: 20px;
        padding-right: 20px;
      }
    `}</style>
  </div>
);

export default SidePadding;
