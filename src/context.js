import { createContext, useContext} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider
      value={{
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useGlobalContext };
