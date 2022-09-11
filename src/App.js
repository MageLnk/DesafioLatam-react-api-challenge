import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext";
// Components
import { Home, ViewMore } from "./pages";
import Error404 from "./pages/404";

const App = () => {
  const { loadData } = useContext(GeneralContext);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id/list" element={<ViewMore />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
