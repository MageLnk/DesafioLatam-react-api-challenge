// Style
import { Card, Popover, Button } from "antd";
import { FaRegSmile } from "react-icons/fa";

const ShowCard = ({ totalData }) => {
  const mapData = totalData.map((info) => {
    const genres = info.genres.map((info) => {
      return (
        <Button
          key={info.mal_id}
          size="small"
          type="danger"
          style={{ width: "6rem", margin: "0.1rem 0.1rem 0.1rem 0" }}
        >
          {info.name}
        </Button>
      );
    });
    const licensors = info.licensors.map((info) => {
      return (
        <span style={{ color: "#ebb62d", fontSize: "14px", fontWeight: "600" }} key={info.mal_id}>
          {info.name}
        </span>
      );
    });
    const popOverContent = (
      <div className="popover-container">
        <div className="popover-seasson-and-population-container">
          <div>
            {info.season && info.season.charAt(0).toUpperCase() + info.season.slice(1)} {info.year}
          </div>
          <div>
            {info.score && Math.trunc(info.score * 10)}% <FaRegSmile style={{ color: "green" }} />
          </div>
        </div>
        <div className="popover-licensors-container">{licensors}</div>
        <div className="popover-general-data">
          <span style={{ color: "#647380", fontWeight: "600", fontSize: "16px" }}>
            {info.type} ∴ {info.episodes && `${info.episodes} episodios`}
          </span>
        </div>
        <div className="popover-genres-container">{genres}</div>
      </div>
    );
    console.log("Viendo el info", info);
    // Return map card
    return (
      <Popover key={info.mal_id} content={popOverContent} placement="rightTop">
        <Card
          className="main-content-card"
          hoverable
          cover={
            <img
              className="main-content-card-img"
              alt="anime"
              src={info.images.jpg.large_image_url}
            />
          }
        >
          <span>{info.title}</span>
        </Card>
      </Popover>
    );
  });

  return <>{mapData}</>;
};

export default ShowCard;

/*

Corregir la entrega el map, cosa que reciba directamente el arreglo y ya

*/
