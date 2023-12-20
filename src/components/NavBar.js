import React from "react";
import "../css/NavBar.css";
import metadata from "../data/metadata.json";
import { FaSpotify } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <FaSpotify className="fab fa-spotify" />
      <div className="app-header ">{metadata.appName}</div>
      <div className="nav-links">
        <FaRegUserCircle className="fab fa-github" />
      </div>
    </div>
  );
};

export default NavBar;
