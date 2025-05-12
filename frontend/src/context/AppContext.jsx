import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //state variables context to be used in the app
  //for navigation
  const navigate = useNavigate();

  //to store user token for auth
  const [user, setUser] = useState(null);

  //to store seller auth by default false
  const [isSeller, setIsSeller] = useState(false);

  const contextValue = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
