import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { SocialMediaIcon } from "../SocialMedia/SocialMediaIcon";

const Menu = () => (
  <ul className="flex gap-10 text-xl text-bold">
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
    <header className="bg-oxblood text-white sticky top-0 z-10">
      <div className="container mx-auto  gap-16 flex items-center p-20">
        <Logo />
        <div className="mobile-menu hidden">
          {isMenuOpen ? "x" : "="}
          {isMenuOpen && <Menu />}
        </div>
        <div className="desktop-menu hidden md:block lg:block  ">
          <Menu />
        </div>
        <SocialMediaIcon />
      </div>
    </header>
  );
};
