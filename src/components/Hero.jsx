import React from "react";
import GreenBt from "./GreenBt";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left"
    >
      <div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-gray-500">
            Cheapest Hosting on Planet Earth
          </p>
          <h1 className="pt-1 text-5xl md:text-7xl font-bold">
            <span className="text-lightColor">ONNN</span>
            Web Services
          </h1>
          <p className="text-base font-light text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestias cupiditate amet similique hic expedita velit omnis laborum
            delectus est!
          </p>
          <GreenBt title="sign in" className={"capitalize py-3 px-6 my-8 "} />
        </div>
        <div className="flex items-center justify-center">
          <img src={hero} alt="" className="w-3/4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
