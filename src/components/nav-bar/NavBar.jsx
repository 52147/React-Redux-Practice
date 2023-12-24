import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [menuActive, setMenuActive] = useState(true);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }
  return (
    <>
      <header className = "header">
        <nav className = {`nav ${menuActive ? "active" : ""}`}>
          <div className = "menu-icon" onClick = {toggleMenu}>
            <div className = {`menu-line ${menuActive ? "active": ""}`}></div>
            <div className = {`menu-line ${menuActive ? "active": ""}`}></div>
            <div className = {`menu-line ${menuActive ? "active": ""}`}></div>
          </div>
          <ul className = "nav-list">
            <li>
              <div className = "heading">My Personal Web</div>
            </li>
            <li className = "nav-item">
              <Link to = "/" className = "nav-link">Home</Link>
            </li>
            <li className = "nav-item">
              <Link to = "/about" className = "nav-link">About</Link>
            </li>
            <li className= "nav-item">
              <Link to = "/contact" className = "nav-link">Contact</Link>
            </li>
            <li className= "nav-item">
              <Link to = "/counter" className = "nav-link">Counter Functional</Link>
            </li>
            <li className= "nav-item">
              <Link to = "/counter_class" className = "nav-link">Counter Class</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )

}
