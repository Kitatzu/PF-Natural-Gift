import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getDetails } from "../../../Redux/Thunks/index";
import defaultImage from "../../Assets/img/imgDefault.png";
// import ProductsHome from "../../Home/ProductsHome/ProductsHome";
import Loading from "../../Loading/Loading";
import Waves from "../../Waves/Waves";
import Rating from "@mui/material/Rating";
import OutlinedInput from "@mui/material/OutlinedInput";
import NavBar from "../../NavBar/NavBar";
import "./ProductsDetail.scss";

const ProductsDetails = () => {
  const { productsId } = useParams();
  const { productDetail = [], isLoading } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(productsId));
  }, []);

  return (
    <div>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Product-container">
          <div className="Product">
            <img
              className="Product-img"
              src={
                productDetail.imageProduct
                  ? productDetail.imageProduct
                  : defaultImage
              }
              alt={productDetail.name}
            />
            <div className="Product-info">
              <h2 className="Product-name">{productDetail.name}</h2>
              <p>
                <span>Precio:</span> ${productDetail.price}
              </p>
              {/* No se puede mostrar la categoría en pantalla, ya que al recargar la página nada se vuelve a renderizar y queda en blanco. */}
              {/* <p><span>Categoría:</span> {productDetail.categories[0].name}</p> */}
              <p>{productDetail.description}</p>
              <ul>
                <li>Envíos a toda Argentina</li>
                <li>Compra segura con Paypal</li>
              </ul>
              <Rating
                className="Product-rating"
                value={Number(productDetail.rating)}
              />
              <div className="Product-add">
                <form>
                  <OutlinedInput
                    type={"number"}
                    inputProps={{ min: 1, max: 10 }}
                  ></OutlinedInput>
                  <button className="Btn-Enviar-Carrito" type="submit">
                    Enviar al carrito{" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Un problema para alguien del futuro que vea esto: al darle click a alguna card no se mostrara en pantalla debido a que solo se rendizar con useEffect */}
      {/* <div className="Products-more">
        <ProductsHome/>
      </div> */}
      <Waves />
    </div>
  );
};

export default ProductsDetails;
