import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const BottomSpacer: React.FC<Props> = ({ height, width }) => (
  <div style={{ height, width }} />
);

export default BottomSpacer;
