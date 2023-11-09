import React from "react";
import { useGlobalContext } from "../context";
import Submenu from "./Submenu";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { openSubmenu, handleMouseChange } = useGlobalContext();

  const disyplaySubmenu = (e) => {
    e.preventDefault();
    const title = e.target.textContent;
    const coordinates = e.target.getBoundingClientRect();
    const center = (coordinates.left + coordinates.right - 330) / 2;
    const bottom = coordinates.bottom + 15;
    openSubmenu(title, { center, bottom });
  };

  return (
    <>
      <main onMouseOver={handleMouseChange} className="closeSubMenu w-full pt-6 px-20 h-20 flex justify-between items-end font-Playpen max-lg:px-10 max-lg:py-0 max-lg:items-center max-lg:h-24">
        <div className="closeSubMenu flex-[1]">
          <h1 className="closeSubMenu text-3xl text-Silver max-lg:text-2xl">CosmoQuest</h1>
        </div>
        <div className="flex justify-evenly items-center flex-[2] h-full text-Silver max-lg:hidden">
          <li onMouseOver={disyplaySubmenu} className="list-none">
            <button className="text-base">Cosmic Explorations</button>
          </li>
          <li onMouseOver={disyplaySubmenu} className="list-none">
            <button className="text-base">Celestial Wonders</button>
          </li>
          <li onMouseOver={disyplaySubmenu} className="list-none">
            <button className="text-base">Space Heritage and Innovation</button>
          </li>
        </div>
        <Sidebar />
        <Submenu />
      </main>
    </>
  );
};

export default Navbar;