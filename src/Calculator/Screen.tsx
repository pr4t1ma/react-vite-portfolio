import  { useState } from "react";
export const Screen = () => {
  const [screenNumber, setScreenNumber] = useState("0");
  const buttonClickHandler = (e) => {
    setScreenNumber((old) => {
      if (e.target.value === "Ac") {
        return "0";
      } else if (e.target.value === "=") {
        // eslint-disable-next-line no-eval
        return eval(screenNumber);
      } else {
        return old === "0" ? e.target.value : old + e.target.value;
      }
    });
  };

  return (
    <div className="d">
      <div className="screen h-15 my-5 bg-white align-center shadow-2xl p-2 text-right">
        {screenNumber}
      </div>
      <div className="button-list grid gap-2 grid-cols-4 ">
        <button onClick={buttonClickHandler} value="1">
          1
        </button>
        <button onClick={buttonClickHandler} value="2">
          2
        </button>
        <button onClick={buttonClickHandler} value="3">
          3
        </button>
        <button onClick={buttonClickHandler} value="4">
          4
        </button>
        <button onClick={buttonClickHandler} value="5">
          5
        </button>
        <button onClick={buttonClickHandler} value="6">
          6
        </button>
        <button onClick={buttonClickHandler} value="7">
          7
        </button>
        <button onClick={buttonClickHandler} value="8">
          8
        </button>
        <button onClick={buttonClickHandler} value="9">
          9
        </button>
        <button onClick={buttonClickHandler} value="0">
          0
        </button>
        <button onClick={buttonClickHandler} value="+">
          +
        </button>
        <button onClick={buttonClickHandler} value="-">
          -
        </button>
        <button onClick={buttonClickHandler} value="*">
          *
        </button>
        <button onClick={buttonClickHandler} value="/">
          /
        </button>
        <button onClick={buttonClickHandler} value="Ac">
          Ac
        </button>
        <button onClick={buttonClickHandler} value="=">
          =
        </button>
      </div>
    </div>
  );
};
