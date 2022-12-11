import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import ProductTarget from "../ProductTarget/ProductTarget";
import { useEffect } from "react";
import { getProductsThunk } from "../../containers/redux/thunks";
const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const products = useSelector((store) => store.products.products);
  console.log(products);
  return (
    <div className="Product-content-products">
      {products !== null &&
        Object.entries(products).map(([key, value]) =>
          value.map((p) => (
            <ProductTarget
              key={p.id}
              id={p.id}
              contents={p.contents}
              name={p.name}
              price={p.price}
              vegan={p.vegan}
              image={p.image}
            />
          ))
        )}
    </div>
  );
};
export default Products;
