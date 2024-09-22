import { useState } from "react";
import "./App.css";

const App = () => {

  
  const createObject = () => {
    let array = [];
    for (let i = 0; i < 36; i++) {
      array.push({
        hasItem: false,
        clicked: false,
      });
    }
    console.log(array);
    let randomObject = Math.floor(Math.random() * array.length);
     console.log("Случайный индекс:", randomObject); 

   array[randomObject] = {
     hasItem: true,
     clicked: false,
   };
    console.log("Массив после изменения случайного объекта:", array);

    return array;
  };

  const [items, setItems] = useState(createObject());

  const createItems = () => {
    const newItems = createObject() 
    setItems(newItems)
  }

  return (
    <div className="container">
      <div className="kekw">Kek</div>
    </div>
  );
};

export default App;
