import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import DefaultRoute from "../components/DefaultRoute";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route component={DefaultRoute} />
    </Switch>
  );
};
export default Routes;
