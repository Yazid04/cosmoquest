import { createContext, useContext, useState } from "react";

const pagesContext = createContext();

const PagesProvider = ({ children }) => {
  const [EXOPLANETS_INTRO_POSITION, SET_EXOPLANETS_INTRO_POSITION] = useState(null);
  const [MARS_INRO_POSITION, SET_MARS_INRO_POSITION] = useState(null);
  const [SOLAR_SYSTEM_INRO_POSITION, SET_SOLAR_SYSTEM_INRO_POSITION] = useState(null);

  return (
    <pagesContext.Provider
      value={{
        EXOPLANETS_INTRO_POSITION,
        SET_EXOPLANETS_INTRO_POSITION,
        MARS_INRO_POSITION,
        SET_MARS_INRO_POSITION,
        SOLAR_SYSTEM_INRO_POSITION,
        SET_SOLAR_SYSTEM_INRO_POSITION
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
