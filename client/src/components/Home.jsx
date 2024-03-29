import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import FileSaver from "file-saver";

const Home = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      "https://abiliu.netlify.app/resources/resume.pdf",
      "resume.pdf"
    );
  };

  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Abi Liu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[650px]">
          I'm a software engineer specializing in building exceptional
          digital experiences as well as discovering creative new ways to tackle
          techincal problems.
        </p>
        <div className="flex gap-3">
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <button
            onClick={saveFile}
            className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
