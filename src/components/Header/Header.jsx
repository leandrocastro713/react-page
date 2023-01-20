import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="quadrado"></div>
        <nav className="navigation">
          <ul className="nav_list">
            <li className="nav_link">Home</li>
            <li className="nav_link">About</li>
            <li className="nav_link">Prices</li>
            <li className="nav_link">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
