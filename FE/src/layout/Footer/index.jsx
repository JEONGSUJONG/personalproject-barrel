import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex bg-black text-white justify-between w-full px-[235px]">
      <div>
        <div className="my-5">
          <img className="my-10" src="/whitelogo.png" alt="logo" />
          <div className="flex">
            <div>
              <p className="text-sm">Contact</p>
              <p className="text-cyan-400 text-md underline">0000-0000</p>
            </div>
            <div className="ml-16">
              <p className="text-sm">Email</p>
              <a
                href="mailto:jeon95ujong@gmail.com"
                className="text-cyan-400 text-md underline hover:text-neutral-500"
              >
                jeon95ujong@gmail.com
              </a>
            </div>
          </div>
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
          <p className="mr-5">
            <BsTwitterX />
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
