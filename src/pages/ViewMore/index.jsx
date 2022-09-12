import { useParams } from "react-router-dom";
// Components
import { Header, Footer, ViewMoreContent } from "../../Components/";
import Error404 from "../404";

const ViewMore = () => {
  const params = useParams();
  return (
    <>
      {params.id !== "top" ? (
        <Error404 />
      ) : (
        <div className="general-container">
          <Header />
          <ViewMoreContent />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ViewMore;
