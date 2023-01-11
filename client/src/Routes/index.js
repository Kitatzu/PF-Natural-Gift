import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import ProductsDetails from "../components/Products/ProductsDetail/ProductsDetail";
import DefaultRoute from "../components/DefaultRoute/DefaultRoute";
import AccountSettings from "../components/Profile/AccountSettings/AccountSettings";
import SobreNosotros from "../components/Sobre-nosotros/Sobre-nosotros";
import Dashboard from "../components/Dashboard/Dashboard";
import Users from "../components/Dashboard/Users";
import Prods from "../components/Dashboard/Prods";
import Cart from "../components/Profile/Cart/Cart";
import FilterPrice from "../components/FilterPrice/FilterPrice";
import Notificaciones from "../components/Notificaciones/Firebase";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Productos" component={Products} />
        <Route exact path="/Users" component={Users} />
        <Route exact path="/Prods" component={Prods} />
        <Route
          exact
          path="/Productos/:productsId"
          component={ProductsDetails}
        />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path="/account" component={AccountSettings} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/FilterPrice" component={FilterPrice} />
        <Route exact path="/Sobre Nosotros" component={SobreNosotros} />
        <Route exact path="/Firebase" component={Notificaciones} />
        <Route component={DefaultRoute} />
      </Switch>
    </>
  );
};
export default Routes;
