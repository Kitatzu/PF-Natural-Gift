import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/Home"} component={Home} />
    </>
  );
}

export default App;
