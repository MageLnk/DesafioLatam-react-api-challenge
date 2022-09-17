import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Home, ViewMore } from "./pages";
// 404
import Error404 from "./pages/404";

const App = () => {
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
