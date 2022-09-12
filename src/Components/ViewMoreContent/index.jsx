import { useEffect, useContext, useState } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import { Loading, ShowCard, Filters } from "../index";

const ViewMoreContent = () => {
  const [filterData, setFilterData] = useState([]);
  const { dataTopOnLoad } = useContext(GeneralContext);

  const filteringData = ({ selected, selection }) => {
    // Si es "true", de mayor a menor
    switch (selection) {
      case "Top":
        const sortResults = dataTopOnLoad.data.sort((a, b) => {
          if (selected === true) {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          }
          if (selected === false) {
            if (a.score > b.score) {
              return 1;
            }
            if (a.score < b.score) {
              return -1;
            }
            return 0;
          }
        });
        setFilterData(sortResults);
        console.log("Viendo el sort", sortResults);
        break;
      case "Name":
        console.log("Nameo k ase");
        break;
      case "Year":
        console.log("Year o k ase");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (dataTopOnLoad) {
      filteringData({ selected: true, selection: "Top" });
    }
  }, [dataTopOnLoad]);

  console.log("Viendo el filterData", filterData);
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
