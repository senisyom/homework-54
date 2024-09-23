import React from "react";
import "./PlayField.css";
import OneBlock from "../OneBlock/OneBlock";

interface Item {
  hasItem: boolean;
    clicked: boolean;
}
interface FieldProps {
    items: Item[];
    onClick: (index: number) => void
}

const PlayField: React.FC<FieldProps> = ({ items, onClick }) => {
  return (
    <div className="play-field">
      {items.map((item, index) => (
          <OneBlock key={index} hasItem={item.hasItem} clicked={item.clicked} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default PlayField;
