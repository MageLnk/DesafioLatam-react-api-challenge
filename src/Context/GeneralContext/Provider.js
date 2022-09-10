import { useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
import miApi from "../miApi";

const GeneralContextProvider = ({ children }) => {
  const [dataOnLoad, setDataOnLoad] = useState("");

  const apiSearch = async (anime) => {
    const data = await miApi({ url: `https://api.jikan.moe/v4/anime?q=${anime}&sfw` });
    //console.log("Anime buscado", data);
    return data;
  };

  const loadTopAnimes = async () => {
    try {
      const data = await miApi({ url: `https://api.jikan.moe/v4/top/anime` });
      setDataOnLoad(data);
    } catch (error) {
      alert("Ha ocurrido un error. Recarga la página");
    }
  };

  const something = async () => {
    try {
      const data = await miApi({ url: `https://api.jikan.moe/v4/seasons/now` });
      console.log("Viendo el something", data);
    } catch (error) {
      alert("Ha ocurrido un error. Recarga la página");
    }
  };

  return (
    <GeneralContext.Provider value={{ dataOnLoad, loadTopAnimes, apiSearch, something }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
