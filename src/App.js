import { useContext } from "react";
// Context
import GeneralContext from "./Context/GeneralContext";

const App = () => {
  const { logIn } = useContext(GeneralContext);
  console.log(logIn);
  return <div>App</div>;
};

export default App;
