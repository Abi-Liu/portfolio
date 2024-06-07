import React from "react";
import Avatar from '../assets/3d-avatar.jpeg'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="pb-8 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-16">
          <img src={Avatar} alt="3d Avatar" className="w-[200px] h-[200px] rounded-full lg:w-[300px] lg:h-[300px]" />
          <div className="max-w-[50%]">
            <p>
              I am passionate about building excellent software that improves the lives of those around me. I love learning new things, diving deep into technologies, and always looking for new ways I can improve as a developer.
            </p>
            <br />
            <p>
              When I'm not coding, you can find me relaxing with my cat or going to the beach with
              my husky. In my free time, I like to spend time with friends and family, play chess, and watch some Youtube.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
