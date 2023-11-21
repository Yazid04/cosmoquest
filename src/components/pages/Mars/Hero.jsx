import React from "react";

const Hero = () => {
  return (
    <div className="closeSubMenu w-[80%] font-Playpen h-96 text-center grid place-content-center absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 text-Silver md:top-[60%] md:-translate-y-[60%]">
      <h2 className="closeSubMenu text-5xl mb-5 md:text-7xl">Roving Mars:</h2>
      <p className="text-xl mb-12">A Journey to the Martian Landscape</p>
      <div>
        <button className="text-xl bg-Silver w-48 p-3 rounded-md text-[#000]">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Hero;