import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(7);
  const [theme, setTheme] = useState("black");

  function decrementCount() {
    setCount((preveCount) => preveCount - 1);
  }
  function incrementCount() {
    setCount((preveCount) => preveCount + 1);
    setTheme("green");
  }
  return (
    <div>
      <h1>HelloWorld</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
