import React from 'react';
import './Header.css'
const Header = () => {
  const menuItems = [
    { href: '#', text: 'Residencies' },
    { href: "#", text: "Our Value" },
    { href: "#", text: "Contact Us" },
    { href: "#", text: "Get Started" },
    { href: "#", text: "Contact", isButton: true }
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
      <a key={index} href={item.href}>{item.text}</a>
    );
  };

  return (
    <section className=" h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu ">
          {menuItems.map(renderItems)}
        </div>
      </div>
    </section>
  );
};

export default Header;