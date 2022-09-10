import { useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
import miApi from "../miApi";

const GeneralContextProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);

  const apiSearch = async (anime) => {
    const data = await miApi({ url: `https://api.jikan.moe/v4/anime?q=${anime}&sfw` });
    console.log("Anime buscado", data);
    return data;
  };

  const loadTopAnimes = async () => {
    const data = await miApi({ url: `https://api.jikan.moe/v4/top/anime` });
    console.log("Anime top list", data);
    return data;
  };

  return (
    <GeneralContext.Provider value={{ logIn, setLogIn, loadTopAnimes, apiSearch }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
