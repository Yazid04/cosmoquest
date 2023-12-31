import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { data } from "../data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { openSideBar, closeSideBar, isSideBarOpen } = useGlobalContext();

  return (
    <main className="block lg:hidden">
      <button onClick={openSideBar}>
        <RxHamburgerMenu className="cursor-pointer text-2xl text-Silver" />
      </button>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%] transition-all ${
          isSideBarOpen
            ? "z-10 visible scale-[1] delay-200 bg-[rgba(88,88,88,0.40)]"
            : "-z-10 invisible scale-[0] delay-200"
        }`}>
    
        <section className="absolute top-[40%] -translate-y-[40%] left-1/2 -translate-x-[50%] h-min w-[90%] p-5 z-20 shadow-lg rounded-md flex flex-col justify-start opacity-[1] bg-Silver m-0">
       
        <div className="w-full flex justify-end items-center">
          <AiOutlineClose
            className="text-3xl text-[black] cursor-pointer"
            onClick={closeSideBar}
          />
        </div>
        {data.map(item => {
            const { subLinks, title, id } = item;
            return (
              <div key={id} className="mb-10 text-start">
                <div className="py-2">
                  <h1 className="text-2xl">{title}</h1>
                </div>
                <div>
                  {subLinks.map(link => {
                    const {name, id, href} = link;
                    return (
                      <div className="pl-5" key={id}>
                      <li><Link onClick={closeSideBar} to={href}>{name}</Link></li>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
        })}
        </section>
      </div>     
    </main>
  );
};

export default Sidebar;