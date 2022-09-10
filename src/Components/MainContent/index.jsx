import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import ShowCard from "./ShowCard";
import Loading from "../Loading";

const MainContent = () => {
  const { dataOnLoad, something } = useContext(GeneralContext);

  const topFiveData = ({ data }) => {
    if (dataOnLoad) {
      const filterData = data.filter((info, index) => {
        if (index < 6) {
          return info;
        }
      });
      return filterData;
    }
  };

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
        <div className="main-content-card-list">
          {!dataOnLoad ? <Loading /> : <ShowCard totalData={topFiveData(dataOnLoad)} />}
        </div>
      </div>
    </div>
  );
};

export default MainContent;

// Hacer el filter para que entre solo 5
