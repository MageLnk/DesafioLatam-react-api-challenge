import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext";
// Components
import { Home } from "./pages";

const App = () => {
  const { apiCall } = useContext(GeneralContext);

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
