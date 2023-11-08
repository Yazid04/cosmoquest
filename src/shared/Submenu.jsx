import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { data } from "../data";

const Submenu = () => {
  const { location, title, showSubmenu } = useGlobalContext();
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
      className={`absolute transition-all w-80 rounded-sm bg-Silver ${
        !showSubmenu ? "hidden" : ""
      }`}
    >
        <div className="w-full h-5 flex justify-center items-center relative"><div className="text-Silver absolute w-5 h-5 bg-Silver rotate-45 left-1/2 -top-1"></div></div>
      <h2 className="px-3 py-3">{title}</h2>
      <ul className="pb-6">
        {current?.subLinks?.map((item, i) => {
          return <li className="list-disc ml-9 py-1" key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Submenu;