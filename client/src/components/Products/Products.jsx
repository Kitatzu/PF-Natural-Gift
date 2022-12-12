import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import ProductTarget from "../ProductTarget/ProductTarget";
import { useEffect } from "react";
import { getProductsThunk } from "../../containers/redux/thunks";
import Loading from "../Loading/Loading";
import Errors from "../Errors/Errors";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      return await dispatch(getProductsThunk());
    })();
  }, [dispatch]);

  const products = useSelector((store) => store.products.products);
  const isLoading = useSelector((store) => store.products.isLoading);
  const { error, type, msg } = useSelector((store) => store.errors);
  console.log(error, type, msg);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Product-content-products">
          {!error && products !== null ? (
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
            )
          ) : (
            <Errors type={type} msg={msg} />
          )}
        </div>
      )}
    </>
  );
};
export default Products;
