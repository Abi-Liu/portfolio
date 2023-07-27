import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Material from "../assets/material.png";
import Git from "../assets/git.png";
import Mongo from "../assets/mongo.png";
import Typescript from "../assets/typescript.png";
import Jest from "../assets/jest.png";

const Technologies = () => {
  return (
    <div
      name="technologies"
      className="bg-[#0a192f] text-gray-300 h-screen w-full pb-10 sm:pb-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Technologies
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-14">
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="Typescript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Typescript}
              alt="javascript icon"
            />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongodb icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Material} alt="MUI icon" />
            <p className="my-4">MATERIAL UI</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Jest} alt="Jest icon" />
            <p className="my-4">JEST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
