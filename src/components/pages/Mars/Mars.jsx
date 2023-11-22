import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
import MarsOverview from "./MarsOverview";
import { Footer } from "../../shared/Footer";
import marsBg from './photos/marsBg.jpeg'

const Mars = () => {
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${marsBg})`,
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
      <MarsOverview />
      <Footer />
    </>
  );
};

export default Mars;