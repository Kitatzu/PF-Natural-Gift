import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getDetails } from "../../../Redux/Thunks/index";
import defaultImage from "../../Assets/img/imgDefault.png";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import Loading from "../../Loading/Loading";
import Waves from "../../Waves/Waves";
import Rating from "@mui/material/Rating";
import NavBar from "../../NavBar/NavBar";
import "./ProductsDetail.scss";
import { Box, Button, Input, Typography, TextField } from "@mui/material";
import AppBar from "../../AppBar/AppBar";
import { Icon } from "@iconify/react";
import { setCart } from "../../../Redux/Thunks/getCart";
import { border } from "@mui/system";
const ProductsDetails = () => {
  const { productsId } = useParams();
  const { productDetail = [], isLoading } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(productsId));
  }, []);
  const Theme = useSelector((store) => store.theme);
  const mode = useSelector((store) => store.theme.mode);
  const loadingCart = useSelector((store) => store.cart.isLoading);
  const [cantidadProducto, setCantidad] = useState(1);

  return (
    <div style={{ background: Theme[mode].primary }}>
      <NavBar /> 
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Product-container">
          <Box
            className="Product"
            display={"flex"}
            flexWrap="wrap"
            justifyContent={"center"}
            alignItems="center"
            sx={{ marginBottom: "100px" }}
          >
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
              <h2
                className="Product-name"
                style={{ color: Theme[mode].textPrimary }}
              >
                {productDetail.name}
              </h2>
              <p style={{ color: Theme[mode].textPrimary }}>
                <span style={{ color: Theme[mode].textPrimary }}>Precio:</span>{" "}
                ${productDetail.price}
              </p>
              {/* No se puede mostrar la categoría en pantalla, ya que al recargar la página nada se vuelve a renderizar y queda en blanco. */}
              {/* <p><span>Categoría:</span> {productDetail.categories[0].name}</p> */}
              <p style={{ color: Theme[mode].textPrimary }}>
                {productDetail.description}
              </p>
              <ul style={{ color: Theme[mode].textPrimary }}>
                <li style={{ color: Theme[mode].textPrimary }}>
                  Envíos a toda Argentina
                </li>
                <li style={{ color: Theme[mode].textPrimary }}>
                  Compra segura con Paypal
                </li>
              </ul>
              <Rating
                className="Product-rating"
                value={Number(productDetail.rating)}
              />
              {
                productDetail.stock > 0 ? 
                (
                <div>
                  <div className="ConStock">
                    <h3>{productDetail.stock} unidades disponibles!</h3>
                  </div>
                  <div className="Product-add">
                    <Box sx={{ marginBottom: "100px" }} display="flex" gap={"10px"}>
                      <Box sx={{ width: "100px" }} style={{ color: Theme[mode].textPrimary }}>
                        <TextField
                          type="number"
                          InputProps={{ inputProps: { min: 1, max: 10}, style: {color: Theme[mode].textPrimary}}}
                          defaultValue={"1"}
                          onChange={(e) => {
                            setCantidad(e.target.value);
                          }}
                        />
                      </Box>
                      <LoadingButton
                        loading={loadingCart}
                        loadingPosition="end"
                        endIcon={<Icon icon="material-symbols:shopping-cart" />}
                        variant="contained"
                        color="secondary"
                        onClick={(e) => {
                          dispatch(
                            setCart({
                              quantity: cantidadProducto,
                              productId: productDetail.id,
                            })
                          );
                        }}
                      >
                        Enviar al carrito
                      </LoadingButton>
                    </Box>
                  </div>
                </div>                                
                ) : 
                <div className="SinStock">
                  <h3>No hay unidades disponibles</h3>
                </div>
              } 
            </div>
          </Box>
        </div>
      )}
      {/* Un problema para alguien del futuro que vea esto: al darle click a alguna card no se mostrara en pantalla debido a que solo se rendizar con useEffect */}
      {/* <div className="Products-more">
        <ProductsHome/>
      </div> */}
      <AppBar />
      <Waves />
    </div>
  );
};

export default ProductsDetails;
