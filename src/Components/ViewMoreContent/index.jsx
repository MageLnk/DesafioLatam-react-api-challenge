import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components

const ViewMoreContent = () => {
  const { dataTopOnLoad } = useContext(GeneralContext);

  console.log("Viendo el dataTopOnLoad", dataTopOnLoad);
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
          <span>Cartas container</span>
        </div>
      </div>
    </div>
  );
};

export default ViewMoreContent;
