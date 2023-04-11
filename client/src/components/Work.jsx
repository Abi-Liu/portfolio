import React from "react";
import FinanceMe from "../assets/projects/financeme.gif";
import Jokr from "../assets/projects/Jokr.gif";
import Socials from "../assets/projects/Socials.gif";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6">// Here is some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Jokr})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Jokr
                <br />
              </span>
              <span className="text-l font-bold text-white tracking-wider">
                A full-stack joke sharing platform. <br /> Technologies: <br />
                Node.js Express Mongoose Ejs Bootstrap5
              </span>
              <div className="pt-8 text-center">
                <a href="https://web-production-d555.up.railway.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Jokr">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
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
              <span className="text-2xl font-bold text-white tracking-wider">
                InstaPic
                <br />
              </span>
              <span className="text-l font-bold text-white tracking-wider">
                A full-stack social media app that allows users to share images
                and comments with friends. <br /> Technologies: <br />
                Node.js Express Mongoose Ejs Cloudinary Bootstrap5
              </span>
              <div className="pt-8 text-center">
                <a href="https://web-production-ed5b.up.railway.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Socials">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
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
              <span className="text-2xl font-bold text-white tracking-wider">
                FinanceMe
                <br />
              </span>
              <span className="text-l font-bold text-white tracking-wider">
                A banking app where users can log in and connect their bank
                accounts using the Plaid API's secure connection to easily
                manage their finances. <br />
                Technologies: <br />
                Node.js Express Mongoose React Plaid MaterialUI
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    disabled={true}
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Not hosted yet!
                  </button>
                </a>
                <a href="https://github.com/Abi-Liu/Finance-Me">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
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
