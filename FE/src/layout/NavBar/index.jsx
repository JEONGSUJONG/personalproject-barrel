import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="relative z-10 text-white bg-black">
      <div className="w-full">
        <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
          
          {/* 로고 넣어주기 (home 버튼) */}
          <div className="flex items-center text-4xl h-16">
            <Link to="/">Logo</Link>
          </div>

          {/* Menu 버튼 */}
          <div className="text-2xl sm:hidden">
            <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
          </div>

          {/* 웹 사이즈 */}
          <div className="hidden sm:block">
            <NavItem />
          </div>

        </div>
        {/* 모바일 사이즈 */}
        <div className="block sm:hidden">
          {menu && <NavItem />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
