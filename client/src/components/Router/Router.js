import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultRoute from "../DefaultRoute/DefaultRoute";
import Home from "../Home/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/home"} component={Home} />
        <Route component={DefaultRoute} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
