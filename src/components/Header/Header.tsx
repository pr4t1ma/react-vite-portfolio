import { useState } from "react";
import { Logo } from "../Logo/Logo";

const Menu = () => (
  <ul className="flex gap-10 text-2xl text-bold">
    <li>
      <a href="#skills">Skills</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
  </ul>
);
export const Header = () => {
  const [isMenuOpen] = useState(false);

  return (
    <header className=" p-3 py-9">
      <div className="container mx-auto md:grid md:grid-cols-4 gap-3 lg:grid lg:grid-cols-2 ">
        <Logo />
        <div className="mobile-menu md:hidden">
          {isMenuOpen ? "x" : "="}
          {isMenuOpen && <Menu />}
        </div>
        <div className="desktop-menu hidden md:block lg:block">
          <Menu />
        </div>
      </div>
    </header>
  );
};
