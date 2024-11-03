import { useEffect, useRef, useState } from "react";
const usePreviousday = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.value;
};

const Customhook = () => {
  const [day, setDay] = useState("Monday");
  const prevDay = usePreviousday();

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };
  return (
    <div className="container p-10">
      <h1 className="text-red-800 bold">
        Today is:{day}
        {prevDay && <span>previousdays was:{prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
};

export default Customhook;
