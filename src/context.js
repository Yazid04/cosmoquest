import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("Yazid, u r great!!!");

  return (
    <AppContext.Provider
      value={{
        name,
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
