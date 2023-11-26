import React from "react";
import Neptunian from "./imgs/Neptunian.jpeg";
import HATP26b from "./imgs/HATP26b.jpeg";
import GJ436 from "./imgs/GJ436.jpeg";

const Neptunians = () => {
  return (
    <main className="text-start h-min my-10 w-[80%] mx-auto mt-20 py-5 max-w-7xl">
      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">Neptunian</h2>
        <div className="mb-5 text-DarkSlateGray">
          <img
            className="w-full h-full object-cover"
            src={Neptunian}
            alt="Super Earth Illustration"
          />
        </div>
        <p className="leading-loose font-Playpen">
          Neptunian exoplanets are similar in size to Neptune or Uranus in our
          solar system. (Neptune is about four times the size, or radius, of
          Earth and almost 17 times its mass, or weight.) Neptunian exoplanets
          may have a mixture of interiors though all would be rocky with heavier
          metals at their cores. Neptunian planets typically have hydrogen- and
          helium-dominated atmospheres. We’re also discovering mini-Neptunes,
          planets smaller than Neptune and bigger than Earth. No planets like
          these exist in our solar system.
        </p>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">1) HAT-P-26b</h2>
        <img
          className="w-full h-full object-cover mb-5 lg:max-w-3xl lg:h-[30rem]"
          src={HATP26b}
          alt="Super-Earth Exoplanet TOI1452b"
        />
        <p className="leading-loose font-Playpen">
          HAT-P-26 b is a Neptune-like exoplanet that orbits a K-type star. Its
          mass is 22.2481 Earths, it takes 4.2 days to complete one orbit of its
          star, and is 0.0479 AU from its star. Its discovery was announced in
          2010.
        </p>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">2) GJ 436 b</h2>
        <img
          className="w-full h-full object-cover mb-5 lg:max-w-3xl lg:h-[30rem]"
          src={GJ436}
          alt="Super-Earth Exoplanet TOI1452b"
        />
        <p className="leading-loose font-Playpen">
          GJ 436 b is a Neptune-sized exoplanet that orbits a M-type star. Its
          mass is 22.1 Earths, it takes 2.6 days to complete one orbit of its
          star, and is 0.0291 AU from its star. Its discovery was announced in
          2004. This unusul world is only 33 light-years away. The planet is too
          compact to be made mostly of hydrogen gas, like Jupiter, but may not
          be compact enough to be a rocky super-Earth. Researchers think it may
          be made mostly of an exotic form of water, an "ice" hardened by
          pressure rather than temperature
        </p>
      </div>
  
    </main>
  );
};

export default Neptunians;
