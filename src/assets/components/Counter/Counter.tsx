import React from "react";
import "./Counter.css";

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return <div className="counter">Tries: {count}</div>;
};

export default Counter;
