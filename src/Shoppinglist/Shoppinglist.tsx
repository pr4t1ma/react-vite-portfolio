import { useState } from "react";

const Shoppinglist = () => {
  const [inputVal, setInputVal] = useState("");

  const handlerInputVal = (e) => {
    setInputVal(e.target.value);
    console.log(e, "Hello");
  };
  return (
    <div>
      <h1>List is here</h1>
      <form action="">
        <input
          value={inputVal}
          type="text"
          placeholder="type here "
          onChange={handlerInputVal}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Shoppinglist;
