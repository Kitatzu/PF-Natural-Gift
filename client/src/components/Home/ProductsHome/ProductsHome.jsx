import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Thunks/index";
import ProductsCards from "../../ProductsCards/ProductsCards";
import BtnSeeAll from "./BtnSeeAll/BtnSeeAll";
import "./ProductsHome.scss";

const ProductsHome = () => {
  const { isLoading, products = [] } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="ProductsHome">
      <div className="ProductsHome-title">
        <h1>Dale un vistazo a nuestros productos</h1>
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
      <BtnSeeAll />
    </div>
  );
};

export default ProductsHome;
