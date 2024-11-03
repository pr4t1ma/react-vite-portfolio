import { useState } from "react";
export const NumberCount = () => {
  const [count, setCount] = useState(10);
  const [theme, setTheme] = useState("purpele");
  const [color, setColor] = useState("green");
  const [text, setText] = useState("Welcome to the my site");

  function decrementCount() {
    setCount((preveCount) => preveCount - 1);
    setTheme("red");
  }
  function incrementCount() {
    setCount((prevenCount) => prevenCount + 1);
    setTheme("rose");
  }
  function changeColor(e) {
    setColor(e.target.value);
  }
  function changeText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <button onClick={decrementCount}>Subtract</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>Add</button>
      <button style={{ color: color }} onClick={changeColor} value="green">
        {color}click me
      </button>
      <button
        style={{ color: "red" }}
        onClick={changeText}
        value="welcome to my site"
      >
        {text}SeeMore
      </button>
    </div>
  );
};
