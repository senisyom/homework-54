import React from "react";
import "./PlayField.css";
import OneBlock from "./OneBlock";

interface Item {
  hasItem: boolean;
    clicked: boolean;
    onCLick: React.MouseEventHandler
}
interface FieldProps {
  items: Item[];
}

const PlayField: React.FC<FieldProps> = ({ items }) => {
  return (
    <div className="play-field">
      {items.map((item, index) => (
        <OneBlock key={index} hasItem={item.hasItem} />
      ))}
    </div>
  );
};

export default PlayField;
