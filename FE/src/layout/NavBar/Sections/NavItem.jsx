import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunction";

const routes = [
  { to: "/login", name: "SIGN IN", auth: false },
  { to: "/register", name: "SIGN UP", auth: false },
  { to: "", name: "LOGOUT", auth: true },
];

const NavItem = ({ mobile }) => {
  const isAuth = useSelector((state) => state.user?.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <ul
      className={`text-md justify-center w-full flex gap-4 ${
        mobile ? "flex-col bg-white text-black h-full items-center" : ""
      }`}
    >
      {routes.map(({ to, name, auth }) => {
        if (isAuth !== auth) return null;
        if (name === "LOGOUT") {
          return (
            <li
              key={name}
              className="py-2 text-center border-b-2 cursor-pointer"
            >
              <Link onClick={handleLogout}>{name}</Link>
            </li>
          );
        } else {
          return (
            <li
              key={name}
              className="py-2 text-center cursor-pointer"
            >
              <Link to={to}>{name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NavItem;
