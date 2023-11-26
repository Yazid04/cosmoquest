import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState({});
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const GLOBAL_ANIMATION_DURATION = 1000;

  function closeSubmenu() {
    setShowSubmenu(false);
  }

  function openSubmenu(text, coordinates) {
    setTitle(text);
    setLocation(coordinates);
    setShowSubmenu(true);
  }

  function openSideBar(){
    setIsSideBarOpen(true)
    document.body.style.overflow = 'hidden';
  }

  function closeSideBar(){
    setIsSideBarOpen(false);
    document.body.style.overflow = 'auto';
  }

  const handleMouseChange = (e)=>{
    if(
      (window.innerWidth > 1024  && e.target.tagName !== 'path') 
      && 
      (e.target.tagName !== 'svg' && e.target.className.includes('closeSubMenu'))
      ){
       closeSubmenu();
    };
  }

  return (
    <AppContext.Provider
      value={{
        closeSubmenu,
        openSubmenu,
        showSubmenu,
        title,
        location,
        handleMouseChange,
        openSideBar,
        closeSideBar,
        isSideBarOpen,
        GLOBAL_ANIMATION_DURATION,
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };