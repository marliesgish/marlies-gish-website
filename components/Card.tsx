import React from "react";
import breakpoints from "../styles/breakpoints";
import ConstraintWidth from "./layout/ConstraintWidth";

interface Props {
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="card">
      {children}
      <style jsx>{`
        .card-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .card {
          flex: 1;
          background-color: #fff;
          border-radius: 10px;
          max-width: 980px;
          padding-top: 40px;
          padding-bottom: 40px;
          padding-left: 20px;
          padding-right: 20px;
          /* box-shadow: 0 0 6px rgba(0, 0, 0, 0.09); */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .card-wrapper + .card-wrapper {
          margin-top: 0;
        }

        @media (${breakpoints.laptop}) {
          .card-wrapper {
            padding-left: 0;
            padding-right: 0;
          }

          .card {
            padding: 30px 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
