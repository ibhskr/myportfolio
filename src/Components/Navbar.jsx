import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Bhaskar Roy</h1>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Project</li>
        <li>About</li>
      </ul>
      <button>[=]</button>
    </div>
  );
}

export default Navbar;
