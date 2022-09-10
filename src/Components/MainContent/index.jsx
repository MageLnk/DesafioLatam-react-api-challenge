import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import ShowCard from "./ShowCard";
import Loading from "../Loading";

const MainContent = () => {
  const { dataOnLoad } = useContext(GeneralContext);
  return (
    <div className="main-content-container">
      <div>
        <h2>Resultados</h2>
        <span>Cartas</span>
      </div>
      <div className="main-content-cards-container">
        <div className="main-content-card-sub-title">
          <h2>Lista top animés</h2>
          <span className="main-content-view-more">Ver más...</span>
        </div>

        {!dataOnLoad ? <Loading /> : <ShowCard totalData={dataOnLoad} />}
      </div>
    </div>
  );
};

export default MainContent;
