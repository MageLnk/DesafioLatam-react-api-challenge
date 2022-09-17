// Components
import { Loading, ShowCard, Filters } from "../index";

const ViewMoreContent = ({ filterData, filteringData }) => {
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
