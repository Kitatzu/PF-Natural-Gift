import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import ProductsDetails from "../components/Products/ProductsDetail/ProductsDetail";
import DefaultRoute from "../components/DefaultRoute/DefaultRoute";
import AccountSettings from "../components/Profile/AccountSettings/AccountSettings";
import Dashboard from "../components/Dashboard/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/Products/:productsId" component={ProductsDetails} />
      <Route exact path="/account" component={AccountSettings} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </Switch>
  );
};
export default Routes;
