import { FC, useState } from "react";

type TodoItemProps = {
  id: number;
  text: string;
  onDelete: (id: number) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ id, text, onDelete }) => {
  const [done, setDone] = useState(false);
  return (
    <div className={`flex my-3 ${done ? "line-through" : ""}`}>
      <input
        className="my-2 mr-5"
        type="checkbox"
        defaultChecked={done}
        onChange={() => {
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
