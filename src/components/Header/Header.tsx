import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const [isMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    // { label: "Works", href: "/Works" },
    // { label: "Experence", href: "/experence" },

    // { label: "Contact", href: "/contact" },
  ];
  return (
    <header className=" p-3 py-9">
      <div className="container mx-auto md:grid md:grid-cols-4 gap-3 lg:grid lg:grid-cols-2 ">
        <Logo />
        <div className="mobile-menu md:hidden">
          {isMenuOpen ? "x" : "="}
          {isMenuOpen && <Menu items={menuItems} />}
        </div>
        <div className="desktop-menu hidden md:block lg:block">
          <Menu items={menuItems} />
        </div>
      </div>
    </header>
  );
};
