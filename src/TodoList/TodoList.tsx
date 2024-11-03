import { useState } from "react";

export const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);

  const addItem = () => {
    if (!newItem) {
      alert("enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldlist) => [...oldlist, item]);
    setNewItem("");
  };
  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };
  const deleteItem = (id) => {
    console.log(id);
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="container w-2/3 mx-auto bg-forestgreen bg-opacity-80 background-filter:blur(20px) my-10 p-8">
      <div className="todo-header text-center text-white">
        <h1>To-Do List</h1>
      </div>
      <div className="m-4">
        <button className="my-5 text-center" onClick={openForm}>
          Clickhere for new Items
        </button>
        {isFormOpen && (
          <div className=" my-5 w-fit flex flex-wrap gap-3  ">
            <input
              className="w-fit p-2 text-center outline-0"
              type="text"
              placeholder="Add new Items"
              onChange={(e) => setNewItem(e.target.value)}
              value={newItem}
            />
            <button className="mr-2" onClick={addItem}>
              Add Item
            </button>
            <button onClick={closeForm}>Close</button>
          </div>
        )}

        <div className="check-list">
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <p>todo</p>
                  <button onClick={deleteItem}>delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
