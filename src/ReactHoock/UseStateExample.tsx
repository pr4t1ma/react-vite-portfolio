import { useState } from "react";
export const UseStateExample = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [count, setCount] = useState(0);
  const [dogs, setDogs] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container  bg-forestgreen opacity-80 mx-auto w-3/12 shadow-2xl-gray p-8 gap-3 my-7 shadow-sm-blue ">
      <h1
        onClick={(setIsGreen, !isGreen)}
        style={{ color: isGreen ? "limegreen" : "blue" }}
      >
        Hello
      </h1>
      <span>{count} Numbercoun increment</span>
      <button className="my-2" onClick={(e) => setCount(count + 1)}>
        Increment
      </button>
      <span>{count} number Decrement </span>
      <button className="my-2 " onClick={() => setCount(count - 1)}>
        decrement
      </button>
      <p>This is a text</p>

      <h2>Dogs</h2>
      <span>{dogs} moredog,s</span>
      <button className="my-2" onClick={() => setDogs(dogs + 1)}>
        mpore
      </button>
      <button className="my-2" onClick={() => setDogs(dogs - 1)}>
        Less
      </button>
      <button className="my-2" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && (
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li> Contact toggle===true</li>
        </ul>
      )}

      <button onClick={() => setToggle(!true)}>toggle more</button>
      {toggle && (
        <div className="div">
          <p>this is a paragraph</p>
          <h1>Heading 1</h1>
        </div>
      )}
    </div>
  );
};
