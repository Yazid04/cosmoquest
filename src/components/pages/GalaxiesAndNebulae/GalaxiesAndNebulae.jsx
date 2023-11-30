import React from "react";
import Navbar from "../../shared/Navbar";
import Hero from "./Hero";
import { Footer } from "../../shared/Footer";
import { useGlobalContext } from "../../context";
import NebulaeOverview from './NebulaeOverview'
import GalaxiesOverview from './GalaxiesOverview'
import southernRingNebula from './imgs/southernRingNebula.png'

const GalaxiesAndNebulae = () => {
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${southernRingNebula})`,
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
      <Hero  />
    </section>
    <GalaxiesOverview />
    <NebulaeOverview />
    <Footer />
    </>
  );
};

export default GalaxiesAndNebulae;