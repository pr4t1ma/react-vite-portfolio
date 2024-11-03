import { useState } from "react";

export const Tabs = ({ items, onTabChange }) => {
  const [active, setActive] = useState(0);

  const onItemClick = (i) => {
    console.log(i);
    onTabChange(i);
    setActive(i);
  };

  return (
    <ul className=" border-l-2 border-oxblood border-solid ">
      {items.map((item, i) => (
        <li key={item.label}>
          <button
            className={`${
              active === i ? "active" : ""
            } w-full block py-3 px-4 hover:bg-oxblood hover:text-white`}
            onClick={() => {
              onItemClick(i);
            }}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
