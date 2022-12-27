import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import ProductsDetails from "../components/Products/ProductsDetail/ProductsDetail";
import DefaultRoute from "../components/DefaultRoute/DefaultRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/Products/:productsId" component={ProductsDetails} />
      <Route component={DefaultRoute} />
    </Switch>
  );
};
export default Routes;
