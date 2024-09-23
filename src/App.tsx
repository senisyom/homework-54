import { useState } from "react";
import "./App.css";
import PlayField from "./assets/components/PlayField";

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
    console.log(array);
    let randomObject = Math.floor(Math.random() * array.length);

    array[randomObject] = {
      hasItem: true,
      clicked: false,
    };
    console.log(":", array);

    return array;
  };

  const [items, setItems] = useState(createObject());

  const openBlock = (index: number) => {
    setItems((currentItems) => {
      const newItems = [...currentItems];
      newItems[index].clicked = true;
      return newItems;
    });
  };

  return (
    <div className="container">
      <div className=""></div>
      <PlayField items={items} onClick={openBlock} />
    </div>
  );
};

export default App;
