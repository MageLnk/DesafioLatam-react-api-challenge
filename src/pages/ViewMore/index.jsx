import { useParams } from "react-router-dom";
// Components
import { Header, Footer, ViewMoreContent } from "../../Components/";

const ViewMore = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="general-container">
      <Header />
      <ViewMoreContent />
      <Footer />
    </div>
  );
};

export default ViewMore;
