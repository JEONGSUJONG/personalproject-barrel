import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunction";
import { AiOutlineShoppingCart } from "react-icons/ai";

const routes = [
  { to: "/login", name: "SignIn", auth: false },
  { to: "/register", name: "SignUp", auth: false },
  { to: "/product/upload", name: "Upload", auth: true },
  {
    to: "/user/cart",
    name: "Cart",
    auth: true,
    icon: <AiOutlineShoppingCart style={{ fontSize: "1.4rem" }} />,
  },

  { to: "/history", name: "OrderList", auth: true },
  { to: "", name: "Logout", auth: true },
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
      {routes.map(({ to, name, auth, icon }) => {
        if (isAuth !== auth) return null;

        if (name === "Logout") {
          return (
            <li
              key={name}
              className="py-2 text-center cursor-pointer"
            >
              <Link onClick={handleLogout}>{name}</Link>
            </li>
          );
        } else if (icon) {
          return (
            <li className='relative py-2 text-center cursor-pointer' key={name}>
              <Link to={to}>
                {icon}
                <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-black border-2 rounded-full -right-3">
                  {1}
                </span>
              </Link>
            </li>
          );
        } else {
          return (
            <li key={name} className="py-2 text-center cursor-pointer">
              <Link to={to}>{name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NavItem;
