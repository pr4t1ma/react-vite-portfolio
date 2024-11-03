import { useState } from "react";
import { TodoItem } from "./TodoItem";
export const StateMessage = () => {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);

  function addItem() {
    if (!newItem) {
      alert("enter here new itesms");
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldlist) => [...oldlist, item]);
    setNewItem("");
    console.log(newItem);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }
  function openForm() {
    setFormOpen(true);
  }
  function closeForm() {
    setFormOpen(false);
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="container mx-auto">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>

      <div className="todo-lis">
        <h1>todo list</h1>
        <button onClick={openForm}>+</button>
        {isFormOpen && (
          <div>
            <input
              type="text"
              value={newItem}
              placeholder="newitem"
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={(e) => addItem(e.target.value)}>Add Item</button>
            <button onClick={closeForm}>x</button>
          </div>
        )}
        <div className="todo">
          <u>
            {items.map((item) => (
              <li key={item.id}>
                <TodoItem
                  id={item.id}
                  text={item.value}
                  onDelete={deleteItem}
                />
              </li>
            ))}
          </u>
        </div>
      </div>
    </div>
  );
};
