import NavBar from "../NavBar/NavBar";
import ProductsCards from "../ProductsCards/ProductsCards";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Thunks/index";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Products.scss";

const Products = () => {
  const { isLoading, products = [] } = useSelector((state) => state.products);
  const isLog = useSelector((store) => store.user.isLog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="Products">
      {/* {!isLog && <Redirect to="/login" />} */}
      <NavBar/>
      <div className="Products-grid">
        <div className="Filters">
          <div>
            FILTRO 1
          </div>
          <div>
            FILTRO 2
          </div>
          <div>
            FILTRO 3
          </div>
        </div>
        <div className="Products-cards">
          {products.map((product) => (
            <ProductsCards
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.imageProduct}
            />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Products;