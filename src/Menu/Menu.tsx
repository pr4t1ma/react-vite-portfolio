import { FC } from "react";
import { Link } from "react-router-dom";

type Item = {
  label: string;
  href: string;
};

type MenuProps = {
  items: Item[];
};
export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <div className=" item-left gap-5 items-center md:flex md:justify-start md:col-span-1 lg:col-span-3 lg:justify-end  ">
      <ul className="divide-y divide-tan md:flex md:justify-center md:gap-8 md:border-none md:divide-none ">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to="/"
              className="hover:text-gray-200 ease-in-out py-3 px-4 block text-black"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className=" block  md:block lg:inline-block  lg:ml-3 ">
        <button className="w-full text-xl">Résumé</button>
      </div>
    </div>
  );
};
