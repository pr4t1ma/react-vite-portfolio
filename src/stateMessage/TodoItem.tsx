import { useState } from "react";

export const TodoItem = ({ id, text, onDelete }) => {
  const [done, setDone] = useState(false);
  return (
    <div className={`flex my-3 ${done ? "line-through" : ""}`}>
      <input
        className="my-2 mr-5"
        type="checkbox"
        defaultChecked={done}
        onChange={(e) => {
          setDone(!done);
          console.log(done);
        }}
      />{" "}
      {text}
      <button
        className="ml-10"
        onClick={() => {
          console.log(id);
          console.log(onDelete);
          onDelete(id);
        }}
      >
        x
      </button>
    </div>
  );
};
