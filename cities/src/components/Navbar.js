import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/add-city" className="nav-link">Add City</Link>
      <Link to="/" className="nav-link">Cities List</Link>
    </nav>
  );
};

export default Navbar;
