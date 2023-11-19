import React from "react";
import { useGlobalContext } from "../context";
import Submenu from "./Submenu";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { data } from "../data";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const { openSubmenu, handleMouseChange, GLOBAL_ANIMATION_DURATION } = useGlobalContext();

  const disyplaySubmenu = (e) => {
    e.preventDefault();
    const width = e.target.offsetWidth;
    const title = e.target.textContent;
    const coordinates = e.target.getBoundingClientRect();
    const center = (coordinates.left + coordinates.right - width) / 2;
    const bottom = coordinates.bottom + 15;
    openSubmenu(title, { center, bottom });
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: GLOBAL_ANIMATION_DURATION },
  });

  return (
    <>
      <main onMouseOver={handleMouseChange} className="closeSubMenu w-full pt-6 px-20 h-20 flex justify-between items-end font-Playpen max-lg:px-10 max-lg:py-0 max-lg:items-center max-lg:h-24">
        <div className="closeSubMenu flex-[1]">
        <animated.div style={fadeIn}>
          <h1 className="closeSubMenu text-3xl text-Silver max-lg:text-2xl"><Link to={'/'}>CosmoQuest</Link> </h1>
        </animated.div>
        </div>
        <div className="flex justify-evenly items-center flex-[2] h-full text-Silver max-lg:hidden">
        
        {data.map(({title, id}) => {
             return (
              <animated.div style={fadeIn} key={id}>
          <li onMouseOver={disyplaySubmenu} className="list-none">
            <button className="text-base">{title}</button>
          </li>
        </animated.div>
             )
        })}
        </div>
        <Sidebar />
        <Submenu />
      </main>
    </>
  );
};

export default Navbar;