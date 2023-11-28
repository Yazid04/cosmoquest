import React from "react";
import Navbar from "../../shared/Navbar";
import Hero from "./Hero";
import BlackHolesOverview from './BlackHolesOverview'
import { Footer } from "../../shared/Footer";
import { useGlobalContext } from "../../context";

const BlackHoles = () => {
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${''})`,
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
    <BlackHolesOverview />
    <Footer />
    </>
  );
};

export default BlackHoles;