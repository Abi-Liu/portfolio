import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import FileSaver from "file-saver";

const Home = () => {
  const [imgUrl, setImgUrl] = useState('')


  useEffect(() => {
    const fetchImg = async () => {
      const res = await fetch("https://api.github.com/users/Abi-Liu")
      const data = await res.json();

      // No bio, so I'm only getting the profile url
      setImgUrl(data.avatar_url)
    }

    fetchImg();
  }, [])
  const saveFile = () => {
    FileSaver.saveAs(
      "https://abiliu.netlify.app/resources/resume.pdf",
      "resume.pdf"
    );
  };

  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col lg:flex-row-reverse items-center justify-center gap-12 h-full">
        <div>
          <img src={imgUrl} alt="Profile picture" className="h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] rounded-full" />
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start">
          <p className="text-xl text-pink-600">Hello, I'm</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Abi Liu
          </h1>
          <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0] pb-4">
            Software Engineer.
          </h2>
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
    </div>
  );
};

export default Home;
