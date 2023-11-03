import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import logo from "../img/heroiamge.png";

function Hero() {
  return (
    <div className=" section h-screen snap-center items-center flex justify-center text-white ">
      <div className="container1 h-screen w-[1400px] flex justify-between">
        <div className="left w-2/5 flex flex-col justify-center gap-5">
          <h1 className="title1 text-7xl">hello! i'm Pratheek</h1>
          <div className="whatwedo flex items-center gap-2">
            <h3>-</h3>
            <h3 className="subtitle text-pink-400">I'm a frontend developer</h3>
          </div>
          <p className="desc text-2xl text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            quasi!
          </p>
          <button className=" group text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Portfolio
            <span className=" ml-1 group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={20} />
            </span>
          </button>
        </div>
        <div className="right w-3/5">
          <img className=" w-[800px] h-[800px] object-contain" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
