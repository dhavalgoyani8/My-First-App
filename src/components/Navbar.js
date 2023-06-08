/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <div className="navHeader">
        <NavLink to={"/"} title="Home">🏡</NavLink>
        <NavLink to={"/user"} title="User">👥</NavLink>
        <NavLink to={"/demo"}>Demo</NavLink>
        <NavLink to={"/test"}>Test</NavLink>
        <NavLink to={"/slider"}>Slider</NavLink>
        <NavLink to={"/search"} title="Search">🔍</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
