import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
import { Footer } from "../../shared/Footer";
import ISSOverview from "./ISSOverview";
import EarthFromSpaceBg from './images/EarthFromSpaceBg.jpeg'

const InternationalSpaceStation = () => {
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${EarthFromSpaceBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
        className="closeSubMenu w-full h-screen relative"
        onMouseOver={handleMouseChange}
      >
        <Navbar />
        <Hero />
      </section>
      <ISSOverview /> 
      <Footer />
    </>
  );
};

export default InternationalSpaceStation;