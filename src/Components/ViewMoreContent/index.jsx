import { useEffect, useContext, useState } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import { Loading, ShowCard, Filters } from "../index";

const ViewMoreContent = () => {
  const [filterData, setFilterData] = useState([]);
  const { dataTopOnLoad } = useContext(GeneralContext);

  const sortData = (dataToSort, selected, infoToSort) => {
    const result = dataToSort.data.sort((a, b) => {
      if (selected === true) {
        if (a[infoToSort] > b[infoToSort]) {
          return -1;
        }
        if (a[infoToSort] < b[infoToSort]) {
          return 1;
        }
        return 0;
      }
      if (selected === false) {
        if (a[infoToSort] > b[infoToSort]) {
          return 1;
        }
        if (a[infoToSort] < b[infoToSort]) {
          return -1;
        }
        return 0;
      }
    });
    return result;
  };

  const filteringData = ({ selected, selection }) => {
    // Si es "true", de mayor a menor
    let resultado = dataTopOnLoad;
    if (selection === "Top") {
      resultado = sortData(dataTopOnLoad, selected, "score");
    } else if (selection === "Name") {
      resultado = sortData(dataTopOnLoad, selected, "title");
    } else if (selection === "Year") {
      resultado = sortData(dataTopOnLoad, selected, "year");
    }
    setFilterData([...resultado]);
  };

  useEffect(() => {
    if (dataTopOnLoad) {
      filteringData({ selected: true, selection: "Top" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTopOnLoad]);

  return (
    <div className="main-content-container">
      <div className="view-more-container">
        <Filters filteringData={filteringData} />
        <div className="view-more-cards-container">
          {!filterData ? <Loading /> : <ShowCard totalData={filterData} />}
        </div>
      </div>
    </div>
  );
};

export default ViewMoreContent;

//
//
//
//
