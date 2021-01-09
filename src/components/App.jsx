import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  function handleOnChange(event) {
    const newItemText = event.target.value;
    setItemText(newItemText);
  }

  function handleOnClick(event) {
    setItems((prevItems) => {
      return [...prevItems, itemText];
    });
    setItemText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <p>Click on the item to delete it!</p>
      <div className="form">
        <input type="text" onChange={handleOnChange} value={itemText} />
        <button onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
