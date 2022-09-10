// Style
import { Card } from "antd";
const { Meta } = Card;

const ShowCard = ({ totalData }) => {
  const mapData = totalData.map((info) => {
    //console.log("Viendo el info", info);
    return (
      <Card
        key={info.mal_id}
        className="main-content-card"
        hoverable
        cover={<img alt="example" src={info.images.jpg.large_image_url} />}
      >
        <Meta title={info.title} description="www.myanimelist.com" />
      </Card>
    );
  });

  return <>{mapData}</>;
};

export default ShowCard;

/*

Corregir la entrega el map, cosa que reciba directamente el arreglo y ya

*/
