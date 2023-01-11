import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
import logo from "../images/cologne.png";
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
        </Link>
        <div className="hamburger" >
          <GiHamburgerMenu />
        </div>       

        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Page") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                  <IoIosArrowDown style={{ position: 'relative', right: '1.8em', top: '.2', color: '#a05f43' }} />
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;

/*
        <div className="mobile-menu">
        <nav className="navbar-mobile">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
        </Link>
        <ul className="nav-items-phone">
          {navItems.map((item) => {
            if (item.title === "Page") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                  <IoIosArrowDown style={{ position: 'relative', right: '1.8em', top: '.2', color: '#a05f43' }} />
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
        </div>
        */