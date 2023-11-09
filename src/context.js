import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState({});
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
  function closeSubmenu() {
    setShowSubmenu(false);
  }

  function openSubmenu(text, coordinates) {
    setTitle(text);
    setLocation(coordinates);
    setShowSubmenu(true);
  }

  function openSideBar(){
    console.log("test")
    setIsSideBarOpen(true)
  }

  function closeSideBar(){
    setIsSideBarOpen(false);
  }

  const handleMouseChange = (e)=>{
    if(window.innerWidth > 1024 && e.target.className.includes('closeSubMenu')){
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
