import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import { Loading, ShowCard } from "../index";

const ViewMoreContent = () => {
  const { dataTopOnLoad } = useContext(GeneralContext);

  console.log("Viendo el dataTopOnLoad", dataTopOnLoad.data);

  const topFiveData = ({ data }) => {
    if (dataTopOnLoad) {
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
      <div className="view-more-container">
        <div className="view-more-filters-container">
          <span>Algo</span>
          <div>
            <span>Filtro 1</span>
            <span>Filtro 2</span>
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
