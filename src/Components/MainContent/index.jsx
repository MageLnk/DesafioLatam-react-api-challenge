import { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import ShowCard from "../ShowCard";
import Loading from "../Loading";

const MainContent = () => {
  const { dataTopOnLoad, dataSeasonOnLoad, dataSearchIt } = useContext(GeneralContext);

  const topFiveData = ({ data }) => {
    if (dataTopOnLoad && dataSeasonOnLoad) {
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
      {dataSearchIt && (
        <div className="main-content-cards-container">
          <div className="main-content-card-sub-title">
            <h2>Resultado</h2>
            <span className="main-content-view-more">Ver más...</span>
          </div>
          <div className="main-content-card-list">
            {!dataSearchIt ? <Loading /> : <ShowCard totalData={topFiveData(dataSearchIt)} />}
          </div>
        </div>
      )}
      <div className="main-content-cards-container">
        <div className="main-content-card-sub-title">
          <h2>Lista top animés</h2>
          <span className="main-content-view-more">
            <Link to="anime/top/list">Ver más...</Link>
          </span>
        </div>
        <div className="main-content-card-list">
          {!dataTopOnLoad ? <Loading /> : <ShowCard totalData={topFiveData(dataTopOnLoad)} />}
        </div>
      </div>
      <div className="main-content-cards-container">
        <div className="main-content-card-sub-title">
          <h2>Animés de la temporada</h2>
          <span className="main-content-view-more">
            <Link to="anime/season/list">Ver más...</Link>
          </span>
        </div>
        <div className="main-content-card-list">
          {!dataSeasonOnLoad ? <Loading /> : <ShowCard totalData={topFiveData(dataSeasonOnLoad)} />}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
