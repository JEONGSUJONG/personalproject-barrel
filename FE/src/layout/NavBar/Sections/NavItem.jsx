import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunction";
import { animateScroll as scroll } from "react-scroll";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";

const routes = [
  { to: "/login", name: "로그인", auth: false },
  { to: "/register", name: "회원가입", auth: false },
  { to: "/product/upload", name: "제품업로드", auth: true },
  { to: "/history", name: "주문목록", auth: true },
  { to: "", name: "로그아웃", auth: true },
  {
    to: "/like",
    name: "좋아요",
    auth: true,
    icon: <HiOutlineHeart style={{ fontSize: "1.6rem" }} />,
  },
  {
    to: "/user/cart",
    name: "카트",
    auth: true,
    icon: <BsCart2 style={{ fontSize: "1.4rem" }} />,
  },
];

const NavItem = () => {
  const isAuth = useSelector((state) => state.user?.isAuth);
  const cart = useSelector((state) => state.user?.userData?.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <ul className="text-md justify-center w-full flex gap-8">
        {routes.map(({ to, name, auth, icon }) => {
          if (isAuth !== auth) return null;

          if (name === "로그아웃") {
            return (
              <li key={name} className="py-2 text-center cursor-pointer">
                <Link onClick={handleLogout}>{name}</Link>
              </li>
            );
            
          } else if (name === "좋아요") {
            return (
              <li
                className="relative py-2 text-center cursor-pointer"
                key={name}
              >
                <Link to={to}>
                  {icon}
                  <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 text-sm text-white bg-cyan-400 rounded-full -right-3">
                    {cart?.length}
                  </span>
                </Link>
              </li>
            );
          } else if (name === "카트") {
            return (
              <li
                className="relative py-2 text-center cursor-pointer"
                key={name}
              >
                <Link to={to}>
                  {icon}
                  <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 text-sm text-white bg-cyan-400 rounded-full -right-3">
                    {cart?.length}
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

      <div
        className="fixed bottom-[165px] right-14 text-xl cursor-pointer bg-white border border-gray-300 shadow-md p-5"
        onClick={scrollToTop}
      >
        <SlArrowUp />
      </div>

      <div
        className="fixed bottom-[100px] right-14 text-xl cursor-pointer bg-white border border-gray-300 shadow-md p-5"
        onClick={scrollToBottom}
      >
        <SlArrowDown />
      </div>
    </>
  );
};

export default NavItem;
