import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState({});
 
  function closeSubmenu() {
    setShowSubmenu(false);
  }

  function openSubmenu(text, coordinates) {
    setTitle(text);
    setLocation(coordinates);
    setShowSubmenu(true);
  }

  const handleMouseChange = (e)=>{
    if(e.target.className.includes('closeSubMenu')){
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
