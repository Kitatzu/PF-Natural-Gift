import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import ProductsDetails from "../components/Products/ProductsDetail/ProductsDetail";
import DefaultRoute from "../components/DefaultRoute/DefaultRoute";
import AccountSettings from "../components/Profile/AccountSettings/AccountSettings";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Productos" component={Products} />
      <Route exact path="/Productos/:productsId" component={ProductsDetails} />
      <Route exact path="/account" component={AccountSettings} />
      <Route component={DefaultRoute} />
    </Switch>
  );
};
export default Routes;
