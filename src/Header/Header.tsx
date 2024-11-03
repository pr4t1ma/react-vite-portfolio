import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };
  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="Hamburger"
      size="xl"
      color="white"
      onClick={toggleMenu}
    />
  );

  const closeIcon = (
    <FontAwesomeIcon
      icon={faMultiply}
      className="Hamburger"
      size="xl"
      color="white"
      onClick={() => setMenuOpen(!true)}
    />
  );

  const menuItems = [
    { label: "Home", href: "/" },
    // { label: "Works", href: "/Works" },
    // { label: "Experence", href: "/experence" },

    { label: "Contact", href: "/Contact" },
  ];
  return (
    <header className=" p-3 py-9">
      <div className="container mx-auto md:grid md:grid-cols-4 gap-3 lg:grid lg:grid-cols-2 ">
        <Logo />
        <div className="mobile-menu md:hidden">
          {isMenuOpen ? closeIcon : hamburgerIcon}
          {isMenuOpen && <Menu items={menuItems} />}
        </div>
        <div className="desktop-menu hidden md:block lg:block">
          <Menu items={menuItems} />
        </div>
      </div>
    </header>
  );
};
