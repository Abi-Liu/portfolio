import React from "react";
import FinanceMe from "../assets/projects/financeme.gif";
import Jokr from "../assets/projects/Jokr.gif";
import Socials from "../assets/projects/Socials.gif";
import ValorantFinder from "../assets/projects/ValorantFinder.gif";
import Budgetbuddy from "../assets/projects/homepage.png";
import ToyScript from "../assets/projects/ToyScript.png";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1310px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6">
            // Please allow for slow load up times of up to 2 minutes due to
            free hosting
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-[90%]">
          <div
            style={{ backgroundImage: `url(${Budgetbuddy})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                Budget Buddy
                <br />
              </span>
              <p className="text-sm font-semibold text-white tracking-wider">
                A new and improved version of my previous app, FinanceMe. This
                iteration utilizes new technologies to improve user experience
              </p>
              <br />
              <p className="text-sm font-semibold text-white tracking-wider">
                Technologies: Typescript, React, Node, Express, Docker,
                Postgres, Redis, Websockets, Nginx, AWS
              </p>
              <div className="pt-6 text-center">
                <a href="https://www.bbapi.online">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <AiFillEye />
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Spendify">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <FaGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ToyScript})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                ToyScript
                <br />
              </span>
              <p className="text-sm font-semibold text-white tracking-wider">
                A custom programming language I made from scratch using
                JavaScript. Implemented key features, such as primitive data
                types, variables, functions, and conditional statements and
                more.
              </p>
              <br />
              <p className="text-sm font-semibold text-white tracking-wider">
                Technologies: Javascript, Jest
              </p>
              <div className="pt-6 text-center">
                <a href="https://medium.com/@abiliu018/how-i-created-my-own-programming-language-from-scratch-9b99fa0a802b">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <FaMedium />
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/ToyScript">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <FaGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ValorantFinder})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                Valorant Finder
                <br />
              </span>
              <p className="text-sm font-semibold text-white tracking-wider">
                An application that tracks users match statistics and history in
                Valorant. Users can sign up, find teammates, and leave reviews
              </p>
              <br />
              <p className="text-sm font-semibold text-white tracking-wider">
                Technologies: Typescript Node.js Express Mongoose React Jest
                MaterialUI
              </p>

              <div className="pt-6 text-center">
                <a href="https://valorantfinder.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <AiFillEye />
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Valorant-Team-Finder">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <FaGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${FinanceMe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                FinanceMe
                <br />
              </span>
              <p className="text-sm font-semibold text-white tracking-wider">
                Users can log in and connect their bank accounts using the Plaid
                API to easily manage their finances.
              </p>
              <br />
              <p className="text-sm font-semibold text-white tracking-wider">
                Technologies: Node.js, Express, Mongoose, React, Plaid,
                MaterialUI
              </p>
              <div className="pt-6 text-center">
                <a href="https://finance-me.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <AiFillEye />
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Finance-Me">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <FaGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Socials})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                InstaPic
                <br />
              </span>
              <p className="text-sm font-semibold text-white tracking-wider">
                A full-stack social media app that allows users to share images
                and comments with friends.
              </p>
              <br />
              <p className="text-sm font-semibold text-white tracking-wider">
                Technologies: Node.js Express Mongoose Ejs Cloudinary Bootstrap5
              </p>
              <div className="pt-8 text-center">
                <a href="https://instapic-umux.onrender.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <AiFillEye />
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Socials">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <FaGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Jokr})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                Jokr
                <br />
              </span>
              <p className="text-sm font-semibold text-white tracking-wider">
                A full-stack joke sharing platform.
              </p>
              <br />
              <p className="text-sm font-semibold text-white tracking-wider">
                Technologies: Node.js Express Mongoose Ejs Bootstrap5
              </p>
              <div className="pt-8 text-center">
                <a href="https://jokr-uvzc.onrender.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <AiFillEye />
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Jokr">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <FaGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
