import { useState } from "react";

// Style
import { BsFilter } from "react-icons/bs";

const Filters = ({ filteringData }) => {
  const [topFilterData, setTopFilterData] = useState(false);
  const [nameFilterNada, setNameFilterData] = useState(true);
  const [YearFilterNada, setYearFilterData] = useState(true);

  const fixFilters = ({ selection }) => {
    switch (selection) {
      case "Top":
        setNameFilterData(true);
        setYearFilterData(true);
        break;
      case "Name":
        setTopFilterData(true);
        setYearFilterData(true);
        break;
      case "Year":
        setTopFilterData(true);
        setNameFilterData(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="view-more-filters-container">
      <span className="view-more-title">Los mejores animes</span>
      <div className="view-more-filters">
        <span
          className="view-more-filter"
          onClick={() => {
            setTopFilterData(!topFilterData);
            filteringData({ selected: topFilterData, selection: "Top" });
            fixFilters({ selection: "Top" });
          }}
        >
          Top animé{" "}
          <BsFilter
            viewBox={!topFilterData ? "0 0 16 08" : "0 4 16 16"}
            className={!topFilterData ? "view-more-icon-filter" : "view-more-icon-filter-rotate"}
          />
        </span>
        <span
          className="view-more-filter"
          onClick={() => {
            setNameFilterData(!nameFilterNada);
            filteringData({ selected: nameFilterNada, selection: "Name" });
            fixFilters({ selection: "Name" });
          }}
        >
          Nombre{" "}
          <BsFilter
            viewBox={!nameFilterNada ? "0 0 16 08" : "0 4 16 16"}
            className={!nameFilterNada ? "view-more-icon-filter" : "view-more-icon-filter-rotate"}
          />
        </span>
        <span
          className="view-more-filter"
          onClick={() => {
            setYearFilterData(!YearFilterNada);
            filteringData({ selected: YearFilterNada, selection: "Year" });
            fixFilters({ selection: "Year" });
          }}
        >
          Año{" "}
          <BsFilter
            viewBox={!YearFilterNada ? "0 0 16 08" : "0 4 16 16"}
            className={!YearFilterNada ? "view-more-icon-filter" : "view-more-icon-filter-rotate"}
          />
        </span>
      </div>
    </div>
  );
};

export default Filters;
