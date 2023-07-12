import { useState } from "react";

function getRandomNumber(max = 100) {
  return Math.floor(Math.random() * max);
}

const INITIAL_LIST = Array.from({ length: 5 }, () => getRandomNumber());

function App() {
  const [list, setList] = useState(INITIAL_LIST);

  const incrementNumber = (index) => {
    setList((existingItems) => {
      return [
        ...existingItems.slice(0, index),

        existingItems[index] + 1,

        ...existingItems.slice(index + 1),
      ];

      // return existingItems.map((item, j) => {

      //   return j === index ? item + 1 : item;

      // });
    });
  };

  const addItemToStart = () => {
    setList((existingItems) => {
      return [getRandomNumber(), ...existingItems];

      // return [getRandomNumber()].concat(existingItems);
    });
  };

  return (
    <div className="App">
      <div>
        <button onClick={addItemToStart}>Add Item to Start</button>

        <button>Add Item to End</button>

        <button>Add Item in between</button>
      </div>

      <div>
        <button>Delete Item from Start</button>

        <button>Delete Item from End</button>

        <button onClick>Delete Item from between</button>
      </div>

      <ul>
        {list.map((item, i) => {
          return (
            <li key={i}>
              <span>{item}</span>

              <button title="increment" onClick={() => incrementNumber(i)}>
                +
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
