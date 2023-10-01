import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300">
      <ul className="flex flex-row justify-between items-center">
        <li>
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/abiliu/"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/Abi-Liu"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://medium.com/@abiliu018"
          >
            <FaMedium size={30} />
          </a>
        </li>
        <li>
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://docs.google.com/document/d/1rAj9Oeefa9VMCD7_TtUyQlgTvRjvKaQO/edit?usp=sharing&ouid=109204111248911555247&rtpof=true&sd=true"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
