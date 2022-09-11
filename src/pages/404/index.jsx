import { Link } from "react-router-dom";
// Style
import { Button } from "antd";

const Error404 = () => {
  return (
    <div className="error-404-container">
      <span className="error-404-menssage">Error 404</span>
      <Link to="/">
        <Button type="primary">Volver al home</Button>
      </Link>
    </div>
  );
};

export default Error404;
