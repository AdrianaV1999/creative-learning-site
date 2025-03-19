import React from "react";
import figma from "../../assets/figma.png";
import canva from "../../assets/canva.png";
import blender from "../../assets/blender.png";
import adobe from "../../assets/adobe.png";
import sketch from "../../assets/sketch.png";

const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">You will learn</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        <img src={figma} alt="Figma" className="w-20 md:w-28" />
        <img src={canva} alt="Canva" className="w-20 md:w-28" />
        <img src={sketch} alt="Sketch" className="w-20 md:w-28" />
        <img src={adobe} alt="Adobe" className="w-20 md:w-28" />
        <img src={blender} alt="Blender" className="w-20 md:w-28" />
      </div>
    </div>
  );
};

export default Companies;
