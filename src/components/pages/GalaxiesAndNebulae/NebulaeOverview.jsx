import React from "react";
import orionNubula from "./imgs/orionNubula.jpeg";
import Slider from "../../shared/Slider";
import { Nebulae } from "./data";

const NebulaeOverview = () => {
  return (
    <>
      <main className="closeSubMenu w-[80%] mx-auto mt-20 py-5 max-w-7xl">
        <div className="mb-14">
          <h2 className="text-5xl mb-5 text-DarkSlateGray font-bold">
            2. Nebulae:
          </h2>
          <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[35rem]">
            <img
              className="w-full h-full object-cover"
              src={orionNubula}
              alt="Introduction to the Solar System"
            />
          </div>
          <p className="leading-relaxed font-Playpen">
            Nebulae, the ethereal clouds of gas and dust scattered throughout
            the cosmos, serve as celestial nurseries where stars are born and
            breathtaking displays of cosmic art unfold. These vast expanses of
            interstellar material, often illuminated by the brilliance of nearby
            stars or other energetic phenomena, come in a diverse array of
            shapes and sizes. Among the most iconic types are emission nebulae,
            such as the famed Orion Nebula, where the intense ultraviolet
            radiation from young, hot stars ionizes surrounding hydrogen gas,
            causing it to emit vivid colors. Another category, reflection
            nebulae, mirrors starlight through the scattering of dust particles,
            creating mesmerizing blue hues. Furthermore, planetary nebulae mark
            the final stages in the life cycle of certain stars, as they expel
            outer layers into space, leaving behind intricate, glowing remnants.
            The study of these cosmic tapestries unveils crucial insights into
            stellar birth, evolution, and the intricate interplay between the
            cosmos' building blocks.
          </p>
        </div>
        <div className="mb-14">
          <h2 className="text-4xl mb-5 text-DarkSlateGray font-bold">
            Unveiling Nebulae: A Historical Journey through the Cosmos
          </h2>
          <p className="leading-relaxed font-Playpen">
            The exploration of nebulae spans centuries, with each era
            contributing to our understanding of these celestial wonders.
            Galileo Galilei, armed with his telescope in the early 17th century,
            first observed nebulous patches in the night sky, unwittingly
            glimpsing distant galaxies and the Andromeda Nebula. William
            Herschel, in the late 18th century, cataloged nebulae as unresolved
            stellar systems before realizing their extragalactic nature. The
            advent of astrophotography in the 19th century allowed astronomers
            like Isaac Roberts to capture detailed images, revealing the
            intricate structures within these cosmic clouds. Edwin Hubble's
            groundbreaking work in the early 20th century not only demonstrated
            the vast distances to certain nebulae but also provided evidence for
            an expanding universe. Modern observatories, such as the Hubble
            Space Telescope, continue to unveil the secrets of nebulae,
            capturing breathtaking images that ignite our cosmic curiosity and
            deepen our appreciation for the beauty and complexity of the
            universe.
          </p>
        </div>
      </main>
      <Slider title="Nebulae" data={Nebulae} />
    </>
  );
};

export default NebulaeOverview;
