import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex bg-black text-white justify-between w-full px-[320px]">
      <div>
        <div className="my-5">
          <img className="my-10" src="/shop_logo_w.png" alt="logo" />
          <p className="text-sm">Contact</p>
          <p className="text-cyan-400 text-2xl">0000-0000</p>
          <p className="py-4 text-sm text-neutral-500">
            평일 10:00~17:00 | 토,일,공휴일 휴무
            <br />
            점심시간 : 12:00~13:00
          </p>
        </div>
      </div>

      <div>
        <div className="flex my-10 text-4xl">
          <a
            href="https://github.com/JEONGSUJONG/project-barrel"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5"
          >
            <FaGithub />
          </a>
          <p className="mr-5">
            <FaInstagram />
          </p>
          <p>
            <IoChatbubbleEllipsesOutline />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
