import React from "react";
import Card from "./Card";
import PrimaryButton from "./buttons/PrimaryButton";
import H2 from "./type/H2";

interface Props {
  title?: string;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
}

const Widget: React.FC<Props> = ({ title, children, buttons = [] }) => {
  return (
    <Card>
      <div className="content">
        <main className="main">
          <div className="title">{title && <H2>{title}</H2>}</div>
          {children}
        </main>
        {buttons && <footer>{buttons}</footer>}
      </div>

      <style jsx>{`
        .content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .main {
          flex-grow: 1;
          margin-bottom: 10px;
        }

        .title {
          margin-bottom: 20px;
        }

        .date {
          color: rgba(0, 0, 0, 0.6);
          line-height: 1;
        }
      `}</style>
    </Card>
  );
};

export default Widget;
