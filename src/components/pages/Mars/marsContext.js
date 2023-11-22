import { createContext, useContext, useState} from "react";

const MarsContext = createContext();

const MarsProvider = ({ children }) => {
  const [overviewSectionPosition, setOverviewSectionPosition] = useState(null);
  

  return (
    <MarsContext.Provider
      value={{
       overviewSectionPosition,
       setOverviewSectionPosition,   
      }}
    >
      {children}
    </MarsContext.Provider>
  );
};

const useMarsContext = () => {
  return useContext(MarsContext);
};

export { MarsProvider, useMarsContext };