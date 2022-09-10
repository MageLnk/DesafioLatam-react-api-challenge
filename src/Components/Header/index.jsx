import { useState, useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Icon
import { SiMyanimelist } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
// Style
import { Input } from "antd";

const Header = () => {
  const [input, setInput] = useState("");
  const { apiCall } = useContext(GeneralContext);
  const handleSearch = (event) => {
    event.preventDefault();
    apiCall(input);
    setInput("");
  };
  return (
    <div className="header-container">
      <div className="header-logo">{<SiMyanimelist viewBox="0 0 24 18" />}</div>
      <div className="header-input">
        <form typeof="submit" onSubmit={(e) => handleSearch(e)}>
          <Input
            placeholder="Insert an anime name"
            prefix={<FaSearch />}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
