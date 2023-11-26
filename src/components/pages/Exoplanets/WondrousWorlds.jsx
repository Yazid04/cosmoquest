import React from "react";
import Navbar from "../../shared/Navbar";
//import milkyWayGalaxy from "./imgs/milkyWayGalaxyBg.jpg";
//import alienWorld from './imgs/alienWorld.jpeg'
import Hero from "./Hero";
import Exoplanets from './Exoplanets'
import Overview from "./Overview";
import {Footer} from '../../shared/Footer'
import { useGlobalContext } from "../../context";
import wondrousworldsBgImg from './imgs/wondrousworldsBgImg.jpeg' 

const WondrousWorlds = () => {
  // 2 extra cool bg images to use in the future (in the images folder and commented out in lines 3 and 4)

  const {handleMouseChange}  = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${wondrousworldsBgImg})`,
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