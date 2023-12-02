import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
import { Footer } from "../../shared/Footer";
import RocketryOverview from "./RocketryOverview";
import SLSbgImg from './images/SLSbgImg.jpeg'

const AdvancementsInRocketry = () => {
  // Another great background image option
  // https://cdn.mos.cms.futurecdn.net/Vty42wM9nZEUxDzAp4Csd9.jpg
  
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${SLSbgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };
// 
  return (
    <>
      <section
        style={{
          ...backgroundStyles,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="closeSubMenu w-full h-screen relative"
        onMouseOver={handleMouseChange}
      >
        <Navbar />
        <Hero />
      </section>
      <RocketryOverview />
      <Footer />
    </>
  );
};

export default AdvancementsInRocketry;