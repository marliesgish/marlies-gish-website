import classNames from "classnames";
import React from "react";
import breakpoints from "../styles/breakpoints";
import ConstraintWidth from "./layout/ConstraintWidth";

interface Props {
  children?: React.ReactNode;
  small?: boolean;
}

const Card: React.FC<Props> = ({ children, small }) => {
  return (
    <div
      className={classNames("card", {
        small,
      })}
    >
      {children}
      <style jsx>{`
        .card {
          flex: 1;
          background-color: #fff;
          border-radius: 10px;
          max-width: 980px;
          padding-top: 40px;
          padding-bottom: 40px;
          padding-left: 20px;
          padding-right: 20px;

          box-shadow: 0 0px 10px 0px rgb(0 0 0 / 7%);
          /* box-shadow: 0 0 6px rgba(0, 0, 0, 0.09); */
          /* box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05);*/
        }

        .card.small {
        }

        @media (${breakpoints.laptop}) {
          .card {
            padding: 80px 80px;
          }

          .card.small {
            padding: 30px 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
