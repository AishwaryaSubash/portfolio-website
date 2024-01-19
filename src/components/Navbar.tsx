import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between m-4 p-4 ">
      <div>
        <Link to="/">Aish</Link>
      </div>
      <div className="flex items-center justify-evenly gap-6">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/skills">Skills</Link>
        </div>
        <div>
          <Link to="/experience">Experience</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
