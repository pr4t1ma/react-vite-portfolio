import { useState } from "react";
export const FunctionComponent = () => {
  const [color, setColor] = useState<string>("red");
  const [brand, setBrand] = useState<string>("Select the brand");

  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const changeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };

  return (
    <div>
      <h1 style={{ color }}>Hello World {color}</h1>
      <p>Brand: {brand}</p>
      <select name="color" id="color" onChange={() => changeColor}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button onClick={() => changeBrand} value="Mercedez">
        Mercedese
      </button>
      <button onClick={() => changeBrand} value="Fork">
        Ford
      </button>
      <button onClick={() => changeBrand} value="BMW">
        BMW
      </button>
    </div>
  );
};
