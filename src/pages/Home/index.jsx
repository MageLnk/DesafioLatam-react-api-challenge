// Components
import { Header } from "../../Components/";

const Home = () => {
  return (
    <div className="general-container">
      <Header />
      <div className="content-container">
        <span>Content</span>
      </div>
      <div className="footer-container">
        <span>Footer</span>
      </div>
    </div>
  );
};

export default Home;
