import React from "react";
import Link from "next/link";
import classNames from "classnames";
import breakpoints from "../../styles/breakpoints";

interface Props {
  href: string;
  children?: React.ReactNode;
  type?: "dark" | "light";
}

const PrimaryButton: React.FC<Props> = ({ href, children, type = "dark" }) => {
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
            color: rgba(0, 0, 0, 0.8);
            border-radius: 7px;
            padding: 9px 16px;
            text-decoration: none;
            font-weight: 400;
            font-size: 16px;
            box-shadow: none;
            transition: background-color 0.2s;
          }

          .primary-button + .primary-button {
            margin-left: 10px;
          }

          .primary-button.light {
            background-color: rgba(255, 255, 255, 0.1);
            color: #fff;
            font-weight: 500;
          }

          .primary-button:hover {
            color: currentColor;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.1);
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

          @media (${breakpoints.tablet}) {
            .primary-button {
              font-size: 18px;
            }
          }
        `}</style>
      </a>
    </Link>
  );
};

export default PrimaryButton;
