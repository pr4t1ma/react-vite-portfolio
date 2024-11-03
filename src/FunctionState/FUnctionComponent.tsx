import { useState } from "react";
export const FunctionComponent = () => {
  const [color, setColor] = useState("red");
  const [brand, setBrand] = useState("Select the brand");

  const changeColor = (e) => {
    setColor(e.target.value);
  };
  const changeBrand = (e) => {
    setBrand(e.target.value);
  };

  return (
    <div>
      <h1 style={{ color }}>Hello World {color}</h1>
      <p>Brand: {brand}</p>
      <select name="color" id="color" onChange={changeColor}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button onClick={changeBrand} value="Mercedez">
        Mercedese{" "}
      </button>
      <button onClick={changeBrand} value="Fork">
        Ford
      </button>
      <button onClick={changeBrand} value="BMW">
        BMW
      </button>
    </div>
  );
};
