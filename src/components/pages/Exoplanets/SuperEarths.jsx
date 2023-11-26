import React from "react";
import SuperEarth from "./imgs/SuperEarth.jpeg";
import TOI1452b from "./imgs/TOI1452b.jpeg";
import Gliese667Cc from './imgs/Gliese667Cc.jpeg'

const SuperEarths = () => {
  return (
    <main className="text-start h-min w-[80%] mx-auto mt-20 py-5 max-w-7xl">
      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">Super Earths</h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[30rem]">
          <img
            className="w-full h-full object-cover"
            src={SuperEarth}
            alt="Super Earth Illustration"
          />
        </div>
        <p className="leading-loose font-Playpen">
          Super-Earths are a class of exoplanets with masses larger than Earth
          but smaller than Uranus or Neptune. These intriguing worlds present a
          diverse range of characteristics, challenging our preconceived notions
          about planetary compositions. Among the plethora of super-Earths
          discovered, two noteworthy examples stand out, offering unique
          insights into the rich tapestry of our galaxy's planetary systems.
        </p>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">1) TOI-1452b</h2>
        <img
          className="w-full h-full object-cover mb-5 lg:max-w-xl lg:h-[23rem]"
          src={TOI1452b}
          alt="Super-Earth Exoplanet TOI1452b"
        />
        <p className="leading-loose font-Playpen">
          TOI-1452b, a super-Earth located in the TESS (Transiting Exoplanet
          Survey Satellite) catalog, orbits its host star with a period of just
          over two days. With a size around twice that of Earth, TOI-1452b
          exemplifies the compact yet fascinating nature of super-Earths. Its
          discovery contributes to our understanding of planetary formation and
          the prevalence of such intermediate-sized planets in our cosmic
          neighborhood. As astronomers continue to study TOI-1452b, it adds a
          valuable data point to the ongoing quest to unravel the mysteries of
          these intriguing exoplanets. The James Webb Space Telescope recently
          found a “prime target for future atmospheric characterization” in this
          exoplanet orbiting a red dwarf star 100 light-years away. Like many
          other exoplanets, researchers discovered this one because it is
          blocking some of the star’s light every time it passes in front of it.
          Based on this information, researchers know that this world is 70
          percent bigger than ours—earning it the nickname “super-Earth”—and
          that it orbits quite rapidly, once about every 11 days. Its density
          could indicate a deep ocean surface, in addition to a rock and metal
          composition, like our planet.
        </p>
      </div>

      <div className="mb-14">
        <h2 className="text-3xl my-3 font-bold">2) Gliese 667 Cc</h2>
        <img
          className="w-full h-full object-cover mb-5 lg:max-w-xl lg:h-[23rem]"
          src={Gliese667Cc}
          alt="Super-Earth Exoplanet TOI1452b"
        />
        <p className="leading-loose font-Playpen">
          This planet is at least 4.5 times larger than Earth. Gliese 667Cc is
          also close to Earth, about 22 light years away in the constellation
          Scorpius. Even though it's not that far from Earth, the planet Gliese
          667Cc has unique facts that we don't even know about yet. Namely,
          Planet Gliese 667Cc is part of a triple star system, which means it
          could be a home for planets in space. Then, according to research by
          scientists, it turns out that Planet Gliesel 667Cc is the object most
          similar to Earth that is outside our solar system and its location is
          known to be in the habitable zone ( Cirumstellar Habitable Zone , CHZ)
          of its parent star which is not too hot and not too cold. This means
          that the planet can maintain water in liquid form on its surface. And
          this is the first indication of a habitable planet.
        </p>
      </div>
 
    </main>
  );
};

export default SuperEarths;
