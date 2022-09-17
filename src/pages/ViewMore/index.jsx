import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import { Header, Footer, ViewMoreContent } from "../../Components/";
import Error404 from "../404";

const ViewMore = () => {
  const params = useParams();
  const navigate = useNavigate();
  const idParams = params.id;

  const [filterData, setFilterData] = useState([]);
  const [validParamsId, setValidParamsId] = useState(false);
  const { dataTopOnLoad, dataSeasonOnLoad } = useContext(GeneralContext);

  const sortData = (dataToSort, selected, infoToSort) => {
    // Si es "true", de mayor a menor
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
    let resultado = [];
    if (idParams === "top") {
      resultado = dataTopOnLoad;
      if (selection === "Top") {
        resultado = sortData(dataTopOnLoad, selected, "score");
      } else if (selection === "Name") {
        resultado = sortData(dataTopOnLoad, selected, "title");
      } else if (selection === "Year") {
        resultado = sortData(dataTopOnLoad, selected, "year");
      }
    }
    if (idParams === "season") {
      resultado = dataSeasonOnLoad;
      if (selection === "Top") {
        resultado = sortData(dataSeasonOnLoad, selected, "score");
      } else if (selection === "Name") {
        resultado = sortData(dataSeasonOnLoad, selected, "title");
      } else if (selection === "Year") {
        resultado = sortData(dataSeasonOnLoad, selected, "year");
      }
    }
    setFilterData([...resultado]);
  };

  useEffect(() => {
    if (dataTopOnLoad || dataSeasonOnLoad) {
      filteringData({ selected: true, selection: "Top" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTopOnLoad]);

  useEffect(() => {
    if (idParams === "top" || idParams === "season") {
      setValidParamsId(true);
    } else {
      navigate("error");
    }
  }, [idParams]);

  return (
    <>
      {validParamsId === true ? (
        <div className="general-container">
          <Header />
          <ViewMoreContent filterData={filterData} filteringData={filteringData} />
          <Footer />
        </div>
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default ViewMore;
