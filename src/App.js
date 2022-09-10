//import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
//import GeneralContext from "./Context/GeneralContext";
// Components
import { Home } from "./pages";

const App = () => {
  //const { logIn } = useContext(GeneralContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
