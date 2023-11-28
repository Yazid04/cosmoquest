import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
import SSOverview from "./SSOverview";
import { Footer } from "../../shared/Footer";
//import marsBg from './photos/marsBg.jpeg'

const Mars = () => {
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(https://cdn.britannica.com/01/81401-050-8EB87030/planets-solar-system-Pluto-montage-images-Sun.jpg)`,
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
      <SSOverview /> 
      <Footer />
    </>
  );
};

export default Mars;