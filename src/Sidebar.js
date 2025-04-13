import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdStorage, MdOutlineManageAccounts } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="/logo" className="logo">
          Logo
        </Link>
      </div>
      <ul>
        <li className="side-icon">
          <FaHome className="icon" /> <Link to="/all">All</Link>
        </li>
        <li className="side-icon">
          <FaSearch className="icon" />
          <Link to="/search">Search</Link>
        </li>
        <li className="side-icon">
          <MdStorage className="icon" />
          <Link to="/add-new">Add New Asset</Link>
        </li>{" "}
        {/* إضافة الرابط */}
        {/* <li><Link to="./Addnew.js">Add New</Link></li> */}
        <li className="side-icon">
          <MdOutlineManageAccounts className="icon" />
          <Link to="/manage">Manage</Link>
        </li>
        <li className="side-icon">
          <SiFuturelearn className="icon" />
          <Link to="/future">Future</Link>
        </li>
      </ul>
      <div className="setting-box side-icon">
        <IoSettingsSharp className="icon" />
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  );
}
