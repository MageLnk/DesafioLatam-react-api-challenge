// Style
import { Card } from "antd";
const { Meta } = Card;

const ShowCard = ({ totalData }) => {
  const mapData = totalData.data.map((info) => {
    console.log("Viendo el info", info);
    return (
      <Card
        key={info.mal_id}
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={info.images.jpg.large_image_url} />}
      >
        <Meta title={info.title} description="www.instagram.com" />
      </Card>
    );
  });

  return <>{mapData}</>;
};

export default ShowCard;

/*


*/
