import { useState, useContext } from "react";
import { Logo } from "../Logo/Logo";
import { SocialMediaIcon } from "../SocialMedia/SocialMediaIcon";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkModeContext } from "../../App";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <header className="bg-primary dark:bg-gray-900 text-white sticky top-0 z-10 transition-colors duration-300">
      <div className="container mx-auto gap-16 flex items-center justify-between p-10">
        <Logo />
        <button
          className="md:hidden lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        {isMenuOpen && (
          <div className="mobile-menu absolute top-20 left-0 right-0 bg-primary dark:bg-gray-900 p-5 md:hidden">
            <Menu />
          </div>
        )}
        <div className="desktop-menu hidden md:block lg:block">
          <Menu />
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-xl p-2 rounded-lg hover:bg-opacity-20 hover:bg-white transition"
            aria-label="Toggle dark mode"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
          <div className="hidden md:block">
            <SocialMediaIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
