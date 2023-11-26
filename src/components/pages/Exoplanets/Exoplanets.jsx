import React from "react";
import superEarthIllustration from "./imgs/superEarthIllustration.jpeg";
import gasGiantsIllustration from "./imgs/gasGiantsIllustration.jpeg";
import neptunianIllustration from "./imgs/neptunianIllustration.jpeg";
import SuperEarths from "./SuperEarths";
import GasGiants from "./GasGiants";
import Neptunians from "./Neptunians";

const Exoplanets = () => {
  const typesOfExoplanets = [
    {
      id: 0,
      name: "super-Earths",
      img: superEarthIllustration,
    },
    {
      id: 1,
      name: "gas giants",
      img: gasGiantsIllustration,
    },
    {
      id: 2,
      name: "Neptunian",
      img: neptunianIllustration,
    },
  ];

  return (
    <main className="w-full h-min my-10">
      <div className="w-full grid place-content-center mb-5 h-40 bg-DarkSlateGray">
        <h1 className="text-Silver text-4xl font-Playpen">Alien Worlds</h1>
      </div>
      <div className="w-full flex flex-wrap">
      <h2 className="font-bold text-2xl w-[80%] mx-auto my-10 text-center">
            Exoplanets can categorized into 3 main classes
      </h2>
        <div className="w-full flex h-min flex-col justify-evenly items-center gap-5 md:flex-row px-10">
          {typesOfExoplanets.map((type) => {
            const { id, name, img } = type;
            return (
              <div
                key={id}
                className="w-60 h-64 relative cursor-pointer bg-[white]"
              >
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt={name}
                />
                <h2 className="absolute w-full text-center py-5 bottom-0 -translate-x-1/2 left-1/2 text-lg text-[white] font-Playpen">
                  {name}
                </h2>
              </div>
            );
          })}
        </div>
        <SuperEarths />
        <GasGiants />
        <Neptunians />
      </div>
    </main>
  );
};

export default Exoplanets;
