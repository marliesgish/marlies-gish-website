import classNames from "classnames";
import React from "react";
import breakpoints from "../../styles/breakpoints";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  small?: boolean;
}

const Paragraph: React.FC<Props> = ({ children, style, small }) => (
  <p
    className={classNames({
      small,
    })}
    style={style}
  >
    {children}
    <style jsx>{`
      p {
        font-size: 16px;
        line-height: 1.8;
        margin-top: 0;
      }

      p + p {
        margin-top: 2em;
      }

      p.small {
        font-size: 14px;
      }

      @media (${breakpoints.tablet}) {
        p {
          font-size: 18px;
        }

        p.small {
          font-size: 16px;
        }
      }
    `}</style>
  </p>
);

export default Paragraph;
