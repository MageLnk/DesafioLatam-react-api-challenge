import { useParams } from "react-router-dom";
// Components
import { Header, Footer } from "../../Components/";

const ViewMore = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="general-container">
      <Header />
      <div className="main-content-container">
        <span>Esto va a cambiar</span>
      </div>
      <Footer />
    </div>
  );
};

export default ViewMore;
