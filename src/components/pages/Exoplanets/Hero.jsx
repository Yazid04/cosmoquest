import React from "react";
import { useGlobalContext } from "../../context";


const Hero = () => {
  const {handleMouseChange} = useGlobalContext();
  return (
    <main onMouseOver={handleMouseChange} className="closeSubMenu text-start absolute top-[45%] -translate-y-[45%] left-1/2 -translate-x-1/2 w-[80%] mx-auto h-64 lg:text-center lg:top-[60%] lg:max-w-4xl">
      <h2 className="text-[#fff] text-3xl leading-relaxed font-Playpen mb-10">
      “Space exploration is a force of nature unto itself that no other force
        in society can rival.”
      </h2>
      <button className="w-32 h-11 text-[black] rounded-md bg-[white] font-Playpen text-base font-bold shadow-sm">Take a tour</button>
    </main>
  );
};

export default Hero;