import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Date: React.FC<Props> = ({ children }) => {
  return (
    <div className="date">
      {children}
      <style jsx>{`
        .date {
          color: rgba(0, 0, 0, 0.5);
          line-height: 1;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default Date;
