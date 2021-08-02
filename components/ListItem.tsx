import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ListItem: React.FC<Props> = ({ children, style = {} }) => (
  <li className="list-item" style={style}>
    {children}
    <style jsx>{`
      .list-item {
        margin-bottom: 0;
      }
    `}</style>
  </li>
);

export default ListItem;
