import React from "react";
import "./OneBlock.css";

interface BlockProps {
  hasItem: boolean;
}

const OneBlock: React.FC<BlockProps> = ({ hasItem }) => {
  return (
    <div className={`one-block ${hasItem ? "" : "has-item"}`}>
      {hasItem ? "💥💣" : ""}
    </div>
  );
};

export default OneBlock;
