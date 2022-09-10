// Components
import { Header, MainContent } from "../../Components/";

const Home = () => {
  return (
    <div className="general-container">
      <Header />
      <MainContent />
      <div className="footer-container">
        <span>Footer</span>
      </div>
    </div>
  );
};

export default Home;
