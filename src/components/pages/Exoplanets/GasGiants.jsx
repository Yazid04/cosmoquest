import React from "react";
import GasGiantIllustration from "./imgs/GasGiantIllustration.jpeg";
import kepler7b from "./imgs/kepler7b.png";
import KELT9b from "./imgs/KELT9b.jpeg";

const GasGiants = () => {
  return (
    <main className="text-start h-min w-[80%] mx-auto mt-20 py-5 max-w-7xl">
   
      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">Gas giants</h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[30rem]">
          <img
            className="w-full h-full object-cover"
            src={GasGiantIllustration}
            alt="Super Earth Illustration"
          />
        </div>
        <p className="leading-loose font-Playpen">
          Gas giants, a distinct class of exoplanets, transcend the familiar
          boundaries of rocky worlds, boasting immense sizes and atmospheres
          predominantly composed of hydrogen and helium. These colossal planets,
          often several times the mass of Jupiter, present a captivating
          diversity that challenges our planetary categorizations. Among the
          troves of gas giants discovered beyond our solar system, two
          noteworthy examples, Kepler-7b and KELT-9b, stand out as celestial
          marvels, each contributing to our expanding understanding of the vast
          and varied planetary landscapes that populate our cosmic neighborhood.
        </p>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">1) Kepler-7b</h2>
        <img
          className="w-full h-full object-cover mb-5 lg:max-w-xl lg:h-[23rem]"
          src={kepler7b}
          alt="Super-Earth Exoplanet TOI1452b"
        />
        <p className="leading-loose font-Playpen">
          On July 4, 2016, NASA’s Juno spacecraft entered Jupiter’s orbit to
          study the king of our solar system. But Jupiter is puny compared to
          some of the exotic exo-Jupiters found in our galaxy, likely to number
          in the billions. More than 3,000 light-years away floats Kepler-7b, a
          gas giant 60 percent larger than Jupiter, but half Jupiter’s mass.
          That means Kepler-7b has roughly the same density as Styrofoam. If you
          found a bathtub big enough, Kepler-7b could float. This monster is
          also more than 12 times hotter than Jupiter, placing it among the
          exoplanets known as “hot Jupiters.” It orbits its huge star so closely
          – in a scorching five days – that it is tidally locked like Earth's
          Moon. One side roasts by day, the other is permanently shrouded in
          darkness.
        </p>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">2) KELT-9b</h2>
        <img
          className="w-full h-full object-cover mb-5 lg:max-w-xl lg:h-[23rem]"
          src={KELT9b}
          alt="Super-Earth Exoplanet TOI1452b"
        />
        <p className="leading-loose font-Playpen">
          An ultrahot world hotter than some stars. The heat of KELT-9b is too
          much even for molecules to remain intact. Molecules of hydrogen gas
          are likely ripped apart on the dayside of tidally-locked KELT-9b,
          unable to re-form until their disjointed atoms flow around to the
          planet's nightside. With a dayside temperature of more than 7,800
          degrees Fahrenheit (4,600 Kelvin), KELT-9b is a planet that is hotter
          than most stars. But its star, called KELT-9, is even hotter – a blue
          A-type star that is likely unraveling the planet through evaporation.
          KELT-9b is a gas giant 2.8 times more massive than Jupiter, but only
          half as dense. Scientists would expect the planet to have a smaller
          radius, but the extreme radiation from its host star has caused the
          planet's atmosphere to puff up like a balloon. The planet is also
          unusual in that it orbits perpendicular to the spin axis of the star.
          That would be analogous to the planet orbiting perpendicular to the
          plane of our solar system. One "year" on this planet is less than two
          days long.
        </p>
      </div>
   
    </main>
  );
};

export default GasGiants;
