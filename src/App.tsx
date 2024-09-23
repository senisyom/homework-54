import { useState } from "react";
import "./App.css";
import PlayField from "./assets/components/PlayField";
import Counter from "./assets/components/Counter";

interface Item {
  hasItem: boolean;
  clicked: boolean;
}

const App: React.FC = () => {
  const createObject = (): Item[] => {
    let array: Item[] = [];
    for (let i = 0; i < 36; i++) {
      array.push({
        hasItem: false,
        clicked: false,
      });
    }
    let randomObject = Math.floor(Math.random() * array.length);

    array[randomObject] = {
      hasItem: true,
      clicked: false,
    };

    return array;
  };

  const [items, setItems] = useState(createObject());
  const [count, setCount] = useState(0);

  const openBlock = (index: number) => {
    setItems((currentItems) => {
      const newItems = [...currentItems];
      if (!newItems[index].clicked) {
        newItems[index].clicked = true;
        countTries();
      }
      return newItems;
    });
  };

  const countTries = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="container">
      <div className=""></div>

      <PlayField items={items} onClick={openBlock} />
      <Counter count={count} />
    </div>
  );
};

export default App;
