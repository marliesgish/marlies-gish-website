import React from "react";
import ConstraintWidth from "./layout/ConstraintWidth";

interface Props {
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <ConstraintWidth maxWidth={820}>{children}</ConstraintWidth>
      </div>
      <style jsx>{`
        .card-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding-bottom: 30px;
          padding-left: 10px;
          padding-right: 10px;
          margin-top: -30px;
        }

        .card {
          flex: 1;
          background-color: #fff;
          border-radius: 10px;
          max-width: 980px;
          padding-top: 80px;
          padding-bottom: 80px;
          padding-left: 20px;
          padding-right: 20px;
          /* box-shadow: 0 0 6px rgba(0, 0, 0, 0.09); */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .card-wrapper + .card-wrapper {
          margin-top: 0px;
        }
      `}</style>
    </div>
  );
};

export default Card;
