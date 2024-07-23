import React, { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const menuItems = [
    { href: "#residencies", text: "Residencies" },
    { href: "#value", text: "Our Value" },
    { href: "#contact-us", text: "Contact Us" },
    { href: "#get-started", text: "Get Started" },
    { href: "mailto:simapoudel6@gmail.com", text: "Contact", isButton: true },
  ];

  const renderItems = (item, index) => {
    if (item.isButton) {
      return (
        <button key={index} className="button">
          <a href={item.href}>{item.text}</a>
        </button>
      );
    }
    return (
      <a key={index} href={item.href} className="menu-link">
        {item.text}
      </a>
    );
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
        <div className="  desktop-menu">
          <div className="flexCenter">

        {menuItems.map(renderItems)}
          </div>
        </div>
        {menuOpened && (
          <nav className="flexCenter h-menu">
            <div className="menu-header">
              <BiX className="close-icon" onClick={() => setMenuOpened(false)} size={30} />
            </div>
            {menuItems.map(renderItems)}
          </nav>
        ) }
       
      </div>
    </section>
  );
};

export default Header;
