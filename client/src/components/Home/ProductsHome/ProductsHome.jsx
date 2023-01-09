import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Thunks/index";
import ProductsCards from "../../ProductsCards/ProductsCards";
import BtnSeeAll from "./BtnSeeAll/BtnSeeAll";
import "./ProductsHome.scss";

const ProductsHome = () => {
  let { isLoading, products = [] } = useSelector((state) => state.products);
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  products = products.slice(0, 3);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="ProductsHome">
      <div className="ProductsHome-title">
        <h1 style={{ color: Theme[mode].textPrimary, fontFamily: "roboto" }}>
          Dale un vistazo a nuestros productos
        </h1>
      </div>

      <div className="Products-cards">
        {products.map((product) => (
          <div key={product.id}>
            <ProductsCards
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.imageProduct}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
      <BtnSeeAll />
    </div>
  );
};

export default ProductsHome;
