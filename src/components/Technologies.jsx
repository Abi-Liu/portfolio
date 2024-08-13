import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Go from "../assets/go.png";
import Docker from "../assets/docker.png";
import Mongo from "../assets/mongo.png";
import Typescript from "../assets/typescript.png";
import Postgres from "../assets/postgres.png";
import Java from "../assets/java.png";
import Spring from "../assets/spring.png";

const Technologies = () => {
  return (
    <div
      name="technologies"
      className="bg-[#0a192f] text-gray-300 h-screen w-full pb-10 sm:pb-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-center text-4xl font-bold inline border-b-4 border-pink-600">
            Technologies
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-14">
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
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Go} alt="Golang icon" />
            <p className="my-4">Golang</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Spring} alt="Spring icon" />
            <p className="my-4">SPRING</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongodb icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Postgres}
              alt="Postgresdb icon"
            />
            <p className="my-4">POSTGRES</p>
          </div>
          <div className="shadow-md shadow-{#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Docker} alt="Docker icon" />
            <p className="my-4">DOCKER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
