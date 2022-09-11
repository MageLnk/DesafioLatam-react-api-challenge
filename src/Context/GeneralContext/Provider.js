import { useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
import miApi from "../miApi";

const GeneralContextProvider = ({ children }) => {
  const [dataTopOnLoad, setDataTopOnLoad] = useState("");
  const [dataSeasonOnLoad, setDataSeasonOnLoad] = useState("");
  const [dataSearchIt, setDataSearchIt] = useState("");

  const apiSearch = async (anime) => {
    try {
      const data = await miApi({ url: `https://api.jikan.moe/v4/anime?q=${anime}&sfw` });
      //console.log(data.data);
      setDataSearchIt(data);
    } catch (error) {
      alert("Ha ocurrido un error. Recarga la página");
    }
  };

  const loadData = async () => {
    try {
      const dataTop = await miApi({ url: `https://api.jikan.moe/v4/top/anime` });
      const dataSeasons = await miApi({ url: `https://api.jikan.moe/v4/seasons/now` });
      setDataTopOnLoad(dataTop);
      setDataSeasonOnLoad(dataSeasons);
    } catch (error) {
      alert("Ha ocurrido un error. Recarga la página");
    }
  };

  return (
    <GeneralContext.Provider
      value={{ dataTopOnLoad, dataSeasonOnLoad, dataSearchIt, apiSearch, loadData }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
