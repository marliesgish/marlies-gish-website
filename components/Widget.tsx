import React from "react";
import Card from "./Card";
import PrimaryButton from "./buttons/PrimaryButton";
import H2 from "./type/H2";

interface Props {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
}

const Widget: React.FC<Props> = ({ title, icon, children, buttons = [] }) => {
  return (
    <Card small>
      <div className="content">
        <main className="main">
          <div className="icon">{icon}</div>
          <div className="title">{title}</div>
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
          margin-bottom: 20px;
        }

        .title {
          margin-bottom: 20px;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          color: rgba(0, 0, 0, 0.4);
        }

        .icon {
          color: rgba(0, 0, 0, 0.4);
          text-align: center;
          font-size: 14px;
        }
      `}</style>
    </Card>
  );
};

export default Widget;
