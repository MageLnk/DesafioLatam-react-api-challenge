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
        if (a.infoToSort > b.infoToSort) {
          return -1;
        }
        if (a.infoToSort < b.infoToSort) {
          return 1;
        }
        return 0;
      }
      if (selected === false) {
        if (a.infoToSort > b.infoToSort) {
          return 1;
        }
        if (a.infoToSort < b.infoToSort) {
          return -1;
        }
        return 0;
      }
    });
    return result;
  };

  const filteringData = ({ selected, selection }) => {
    // Si es "true", de mayor a menor
    switch (selection) {
      case "Top":
        const sortByScore = dataTopOnLoad.data.sort((a, b) => {
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
        setFilterData(sortByScore);
        console.log("Sort Original", sortByScore);
        console.log("sortData o k ase?", sortData(dataTopOnLoad, selected, "score"));
        // La función "sortData" funciona. Se podría simplicar el código, pero ni con la función
        // ni hecho directamente acá, me renderiza el componente usando el setFilterData()
        break;
      case "Name":
        const sortByName = dataTopOnLoad.data.sort((a, b) => {
          if (selected === true) {
            if (a.title > b.title) {
              return -1;
            }
            if (a.title < b.title) {
              return 1;
            }
            return 0;
          }
          if (selected === false) {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          }
        });
        console.log("Sort Original", sortByName);
        setFilterData(sortByName);
        break;
      case "Year":
        const sortByYear = dataTopOnLoad.data.sort((a, b) => {
          if (selected === true) {
            if (a.year > b.year) {
              return -1;
            }
            if (a.year < b.year) {
              return 1;
            }
            return 0;
          }
          if (selected === false) {
            if (a.year > b.year) {
              return 1;
            }
            if (a.year < b.year) {
              return -1;
            }
            return 0;
          }
        });
        console.log("Sort Original", sortByYear);
        setFilterData(sortByYear);
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

  console.log("Filter data o k ase", filterData);

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
