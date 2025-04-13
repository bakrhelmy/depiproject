import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false); // State to toggle dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Switch between true (dark) and false (light)
  };

  return (
    <div className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="search-box">
        <input type="text" placeholder="Search Anything" />
        <FaSearch className="search-icon" />
      </div>
      <div className="icons">
        <button onClick={toggleDarkMode}>
          <MdDarkMode className="icon" />
        </button>
        <button>
          <FaBell className="icon" />
        </button>
        <button>
          <FaUserCircle className="icon" />
        </button>
      </div>
    </div>
  );
}
