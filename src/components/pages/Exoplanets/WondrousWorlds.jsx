import React from "react";
import Navbar from "../../shared/Navbar";
//import milkyWayGalaxy from "./imgs/milkyWayGalaxyBg.jpg";
//import alienWorld from './imgs/alienWorld.jpeg'
import Hero from "./Hero";
import Exoplanets from './Exoplanets'
import Overview from "./Overview";
import {Footer} from '../../shared/Footer'
import { useGlobalContext } from "../../context";

const WondrousWorlds = () => {
  //const img2 = "https://storage.googleapis.com/pod_public/1300/120656.jpg";
  //const img3 = "https://img.freepik.com/premium-photo/alien-world-exoplanet-planet-landscape-digital-painting-artwork_743855-1727.jpg";
  const img5 = "https://static01.nyt.com/images/2019/06/25/science/14exoplanets1/merlin_156410241_271b8bea-5efb-4622-a1c4-a0463590202a-superJumbo.jpg";
  
  const {handleMouseChange}  = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${img5})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section
        style={{
          ...backgroundStyles,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}

        className="closeSubMenu bg-DarkSlateGray w-full h-screen relative" onMouseOver={handleMouseChange}>
        <Navbar />
       <Hero />
      </section>
      <Overview />
      <Exoplanets />
      <Footer />
    </>
  );
};

export default WondrousWorlds;