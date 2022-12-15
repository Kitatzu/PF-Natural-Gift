import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import DefaultRoute from "../components/DefaultRoute/DefaultRoute";
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
