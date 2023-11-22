import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
import MarsOverview from "./MarsOverview";
import {Footer} from '../../shared/Footer'

const Mars = () => {
  const { handleMouseChange } = useGlobalContext();
  const styles = {
    backgroundImage: `url('https://mars.nasa.gov/assets/red_planet_bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  

  return (
    <>
      <section style={styles} className="closeSubMenu w-full h-screen relative" onMouseOver={handleMouseChange}>
        <Navbar />
        <Hero />
      </section>
      <MarsOverview />
      <Footer />
    </>
  );
};

export default Mars;