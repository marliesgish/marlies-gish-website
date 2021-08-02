import React from "react";
import H1 from "./type/H1";

interface Props {
  headline: string;
  date: string;
  center?: boolean;
}

const Masthead: React.FC<Props> = ({ headline, date, center }) => (
  <header
    className="masthead"
    style={{ textAlign: center ? "center" : "left" }}
  >
    <H1>{headline}</H1>
    {date && (
      <div className="date">
        <small>
          <time dateTime={date}>Posted on {date}</time>
        </small>
      </div>
    )}

    <style jsx>{`
      .masthead {
        margin-bottom: 50px;
      }

      .date {
        opacity: 0.5;
      }
    `}</style>
  </header>
);

export default Masthead;
