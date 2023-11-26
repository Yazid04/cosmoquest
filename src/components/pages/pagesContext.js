import { createContext, useContext, useState } from "react";

const pagesContext = createContext();

const PagesProvider = ({ children }) => {
  const [EXOPLANET_INTRO_POSITION, setEXOPLANET_INTRO_POSITION] = useState(null);
  const [overviewSectionPosition, setOverviewSectionPosition] = useState(null);


  return (
    <pagesContext.Provider
      value={{
        EXOPLANET_INTRO_POSITION,
        setEXOPLANET_INTRO_POSITION,
        overviewSectionPosition,
        setOverviewSectionPosition
      }}
    >
      {children}
    </pagesContext.Provider>
  );
};

const usePagesContext = () => {
  return useContext(pagesContext);
};

export { PagesProvider, usePagesContext };
