import React from "react";
import Link from "next/link";
import classNames from "classnames";
import breakpoints from "../../styles/breakpoints";
import theme from "../../styles/theme";

interface Props {
  href: string;
  children?: React.ReactNode;
  type?: "dark" | "light";
  block?: boolean;
  small?: boolean;
}

const PrimaryButton: React.FC<Props> = ({
  href,
  children,
  type = "dark",
  block,
  small,
}) => {
  return (
    <Link href={href} passHref>
      <a
        className={classNames("primary-button", {
          light: type === "light",
          block,
          small,
        })}
      >
        {children}
        <style jsx>{`
          .primary-button {
            background-color: ${theme.colors.primary};
            color: #fff;
            border-radius: 7px;
            padding: 9px 16px;
            text-decoration: none;
            font-weight: 400;
            font-size: 16px;
            box-shadow: none;
            transition: background-color 0.2s;
          }

          .primary-button.block {
            display: block;
            text-align: center;
          }

          .primary-button + .primary-button {
            margin-left: 10px;
          }

          .primary-button.block + .primary-button.block {
            margin-left: 0;
            margin-top: 10px;
          }

          .primary-button.light {
            background-color: rgba(255, 255, 255, 0.1);
            color: #fff;
            font-weight: 500;
          }

          .primary-button:hover {
            background-color: #228e42;
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

          @media (${breakpoints.tablet}) {
            .primary-button {
              font-size: 18px;
            }

            .primary-button.small {
              font-size: 16px;
            }
          }
        `}</style>
      </a>
    </Link>
  );
};

export default PrimaryButton;
