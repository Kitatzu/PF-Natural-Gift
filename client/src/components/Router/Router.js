import { BrowserRouter, Route } from "react-router-dom";
import DefaultRoute from "../DefaultRoute/DefaultRoute";
import Home from "../Home/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/home"} component={Home} />
      <Route component={DefaultRoute} />
    </BrowserRouter>
  );
};
export default Router;
