import React from "react";

interface Props {
  children?: React.ReactNode;
  maxWidth: number;
}

const ConstraintWidth: React.FC<Props> = ({ children, maxWidth = 0 }) => (
  <div className="constraint-width">
    {children}
    <style jsx>{`
      .constraint-width {
        max-width: ${maxWidth}px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
);

export default ConstraintWidth;
