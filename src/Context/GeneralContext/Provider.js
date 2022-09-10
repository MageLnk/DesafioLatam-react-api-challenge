import { useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
import miApi from "../miApi";

const GeneralContextProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);

  const apiCall = async (anime) => {
    const data = await miApi({ url: `https://api.jikan.moe/v4/anime?q=Dragon ball&sfw` });
    console.log("Algo", data);
    return data;
  };

  return (
    <GeneralContext.Provider value={{ logIn, setLogIn, apiCall }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
