import React from "react";
import "./OneBlock.css";

interface BlockProps {
  hasItem: boolean;
  clicked: boolean;
  onClick: () => void;
}

const OneBlock: React.FC<BlockProps> = ({ hasItem, clicked, onClick }) => {
  return (
    <div
      className={`one-block  ${clicked ? (hasItem ? "" : "gray") : ""}`}
      onClick={onClick}
    >
      {clicked ? (hasItem ? "💥💣" : "") : ""}
    </div>
  );
};

export default OneBlock;
