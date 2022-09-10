import { useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
//import apiCall from "../../Api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);

  return <GeneralContext.Provider value={{ logIn, setLogIn }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
