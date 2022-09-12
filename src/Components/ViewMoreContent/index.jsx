import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import { Loading, ShowCard, Filters } from "../index";

const ViewMoreContent = () => {
  const { dataTopOnLoad } = useContext(GeneralContext);

  //console.log("Viendo el dataTopOnLoad", dataTopOnLoad.data);

  const filteringData = (key) => {
    // Si es "true", de mayor a menor
    console.log("Ola ka ase", key);
  };
  return (
    <div className="main-content-container">
      <div className="view-more-container">
        <Filters filteringData={filteringData} />
        <div className="view-more-cards-container">
          {!dataTopOnLoad ? <Loading /> : <ShowCard totalData={dataTopOnLoad.data} />}
        </div>
      </div>
    </div>
  );
};

export default ViewMoreContent;
