import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  // here wa can add the apiChatBotUrl
  const apiUrl = import.meta.env.VITE_API_URL;

  const [token, setToken] = useState('');

  // Keep localStorage in sync with token
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const value = {
    currencySymbol,
    backendUrl,
    apiUrl, 
    token,setToken,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
