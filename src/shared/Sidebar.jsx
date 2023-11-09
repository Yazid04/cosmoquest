import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { data } from "../data";

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
    
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] w-[90%] p-5 z-20 shadow-lg rounded-md flex flex-col justify-start opacity-[1] bg-Silver">
       
        <div className="w-full flex justify-end items-center">
          <AiOutlineClose
            className="text-3xl text-[black] cursor-pointer"
            onClick={closeSideBar}
          />
        </div>
        {data.map(item => {
            const { subLinks, title, id } = item;
            return (
              <div key={id} className="my-5">
                <div className="py-2">
                  <h1 className="text-2xl">{title}</h1>
                </div>
                <div>
                  {subLinks.map((link, idx) => {
                    return (
                      <div className="pl-5" key={idx}>
                        <li>{link}</li>
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
