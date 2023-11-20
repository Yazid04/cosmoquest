import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { data } from "../data";
import { Link } from "react-router-dom";

const Submenu = () => {
  const { location, title, showSubmenu, closeSubmenu } = useGlobalContext();
  const current = data.find((name) => name.title === title);

  const submenuContainer = useRef(null);
  useEffect(() => {
    const container = submenuContainer.current;
    const { center, bottom } = location;
    container.style.top = `${bottom}px`;
    container.style.left = `${center}px`;
  }, [location]);

  return (
    <div
      ref={submenuContainer}
      className={`absolute transition-all duration-500 z-10 ease-in-out w-80 rounded-sm bg-Silver ${
        !showSubmenu ? "hidden" : ""
      }`}
    >
        <div className="w-full h-5 flex justify-center items-center relative">
          <div className="text-Silver absolute w-5 h-5 bg-Silver rotate-45 left-12 -top-1 rounded-[0.18rem]"></div>
        </div>
        
      <h2 className="px-3 py-3 font-bold text-xl">{title.toUpperCase()}</h2>
      <ul className="pb-6 text-start">
        {current?.subLinks?.map((item, i) => {
          return <li className="list-disc ml-9 mb-2" key={i}><Link onClick={closeSubmenu} to={item.href}>{item.name}</Link></li>;
        })}
      </ul>
    </div>
  );
};

export default Submenu;