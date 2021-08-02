import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const UnorderedList: React.FC<Props> = ({ children, style = {} }) => (
  <ul className="unordered-list" style={style}>
    {children}
    <style jsx>{`
      .unordered-list {
        margin-left: 0;
        margin-bottom: 0;
        list-style: none;
        display: flex;
      }
    `}</style>
  </ul>
);

export default UnorderedList;
