import React from "react";
import Link from "next/link";
import classNames from "classnames";

const PrimaryButton = ({ href, children, type = "dark" }) => {
  return (
    <Link href={href} passHref>
      <a
        className={classNames("primary-button", {
          light: type === "light",
        })}
      >
        {children}
        <style jsx>{`
          .primary-button {
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 7px;
            padding: 7px 14px;
            text-decoration: none;
            font-weight: 500;
            font-size: 18px;
            box-shadow: none;
          }

          .primary-button.light {
            background-color: rgba(255, 255, 255, 0.1);
            color: #fff;
            transition: background-color 0.2s;
          }

          .primary-button:hover {
            color: currentColor;
            text-decoration: none;
          }

          .primary-button.light:hover {
            color: #fff;
            background-color: rgba(255, 255, 255, 0.2);
            text-decoration: none;
          }

          .primary-button:active {
          }

          .primary-button:focus {
          }
        `}</style>
      </a>
    </Link>
  );
};

export default PrimaryButton;
