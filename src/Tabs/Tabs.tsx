import { FC, useState } from "react";
type TabItem = {
  label: string;
};
type TabsProps = {
  items: TabItem[];
  onTabChange: (i: number) => void;
};

export const Tabs: FC<TabsProps> = ({ items, onTabChange }) => {
  const [active, setActive] = useState(0);

  const onItemClick = (i: number) => {
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
              active === i ? "bg-oxblood text-white" : ""
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
