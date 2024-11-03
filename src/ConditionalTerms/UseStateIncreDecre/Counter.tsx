import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);

  const changeText = () => {
    setTheme(true);
  };
  return (
    <div className="container mx-auto bg-white my-4 p-4 shadow-2xl ">
      <h1>Incredecrement Counter</h1>
      <div className="container  p-3 flex gap-3">
        <button onClick={() => setCount(count + 1)}>increment Count</button>
        <span className="align-center p-3 bg-gray">{count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement Count</button>
        <button style={{ color: "green" }} onClick={changeText}>
          {theme} click me
        </button>
      </div>
    </div>
  );
};
