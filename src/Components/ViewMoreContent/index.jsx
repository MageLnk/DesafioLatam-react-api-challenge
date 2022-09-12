import { useContext, useState } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import { Loading, ShowCard } from "../index";
// Style
import { BsFilter } from "react-icons/bs";

const ViewMoreContent = () => {
  const [topFilterData, setTopFilterData] = useState(false);
  const [nameFilterNada, setNameFilterData] = useState(true);
  const [YearFilterNada, setYearFilterData] = useState(true);
  const { dataTopOnLoad } = useContext(GeneralContext);

  //console.log("Viendo el dataTopOnLoad", dataTopOnLoad.data);

  const filteringData = (key) => {
    // Si es "true", de mayor a menor
    console.log("Ola ka ase", key);
  };
  return (
    <div className="main-content-container">
      <div className="view-more-container">
        <div className="view-more-filters-container">
          <span className="view-more-title">Los mejores animes</span>
          <div className="view-more-filters">
            <span
              className="view-more-filter"
              onClick={() => {
                setTopFilterData(!topFilterData);
                filteringData({ topFilterData, selection: "Top" });
              }}
            >
              Top animé{" "}
              <BsFilter
                viewBox={!topFilterData ? "0 0 16 08" : "0 4 16 16"}
                className={
                  !topFilterData ? "view-more-icon-filter" : "view-more-icon-filter-rotate"
                }
              />
            </span>
            <span
              className="view-more-filter"
              onClick={() => {
                setNameFilterData(!nameFilterNada);
                filteringData({ nameFilterNada, selection: "Name" });
              }}
            >
              Nombre{" "}
              <BsFilter
                viewBox={!nameFilterNada ? "0 0 16 08" : "0 4 16 16"}
                className={
                  !nameFilterNada ? "view-more-icon-filter" : "view-more-icon-filter-rotate"
                }
              />
            </span>
            <span
              className="view-more-filter"
              onClick={() => {
                setYearFilterData(!YearFilterNada);
                filteringData({ YearFilterNada, selection: "Name" });
              }}
            >
              Año{" "}
              <BsFilter
                viewBox={!YearFilterNada ? "0 0 16 08" : "0 4 16 16"}
                className={
                  !YearFilterNada ? "view-more-icon-filter" : "view-more-icon-filter-rotate"
                }
              />
            </span>
          </div>
        </div>
        <div className="view-more-cards-container">
          {!dataTopOnLoad ? <Loading /> : <ShowCard totalData={dataTopOnLoad.data} />}
        </div>
      </div>
    </div>
  );
};

export default ViewMoreContent;
