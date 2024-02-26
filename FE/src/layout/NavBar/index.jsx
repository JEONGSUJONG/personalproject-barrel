import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";

const Navbar = () => {

  return (
    <nav className="text-black shadow-md fixed top-0 w-full z-10 bg-white py-2">
      <div>
        <div className="flex items-center justify-between mx-20">
          <div className="flex items-center text-2xl h-16">
            <Link to="/">
              <img src="/cyanlogo.png" alt="Home" />
            </Link>
          </div>
          <div>
            <NavItem />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
