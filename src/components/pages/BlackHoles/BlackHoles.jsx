import React from "react";
import Navbar from "../../shared/Navbar";
import BlackHolesOverview from "./BlackHolesOverview";
import { Footer } from "../../shared/Footer";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";

const BlackHoles = () => {
  const { handleMouseChange } = useGlobalContext();

  return (
    <>
      <section
        className="closeSubMenu w-full h-screen bg-[black] relative lg:h-min"
        onMouseOver={handleMouseChange}
      >
        <Navbar />
        <Hero />
      </section>
      <BlackHolesOverview />
      <Footer />
    </>
  );
};

export default BlackHoles;
