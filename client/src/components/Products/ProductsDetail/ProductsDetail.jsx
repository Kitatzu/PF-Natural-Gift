import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getDetails } from "../../../Redux/Thunks/index";
import defaultImage from "../../Assets/img/imgDefault.png";
// import ProductsHome from "../../Home/ProductsHome/ProductsHome";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import Loading from "../../Loading/Loading";
import Waves from "../../Waves/Waves";
import Rating from "@mui/material/Rating";
import NavBar from "../../NavBar/NavBar";
import "./ProductsDetail.scss";
import {
  Alert,
  Box,
  Button,
  Input,
  Typography,
  TextField,
} from "@mui/material";
import AppBar from "../../AppBar/AppBar";
import { Icon } from "@iconify/react";
import { setCart } from "../../../Redux/Thunks/getCart";
import { searchProducts } from "../../../Redux/Thunks/searchProducts";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import Paginated from "../../Paginated/Paginated";
import ProductsCards from "../../ProductsCards/ProductsCards";
import Toast from "../../Toast/Toast";
const url = window.location.href.split("/")[3].toLowerCase();
const urlRoute = window.location.href.split("/")[4];
const ProductsDetails = () => {
  const { productsId } = useParams();
  const { productDetail = [], isLoading } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(productsId));
  }, []);
  let { products } = useSelector((store) => store.products);

  const Theme = useSelector((store) => store.theme);
  const mode = useSelector((store) => store.theme.mode);
  const loadingCart = useSelector((store) => store.cart.isLoading);
  const [cantidadProducto, setCantidad] = useState(1);

  const { status, error } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (window.innerWidth > 1500) {
    var widthX = 6;
  } else {
    var widthX = 4;
  }

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
              {productDetail.stock > 0 ? (
                <div>
                  <div className="ConStock">
                    <h3>{productDetail.stock} unidades disponibles!</h3>
                  </div>
                  <div className="Product-add">
                    <Box
                      sx={{ marginBottom: "100px" }}
                      display="flex"
                      gap={"10px"}
                    >
                      <Box
                        sx={{ width: "100px" }}
                        style={{ color: Theme[mode].textPrimary }}
                      >
                        <TextField
                          type="number"
                          InputProps={{
                            inputProps: { min: 1, max: 10 },
                            style: { color: Theme[mode].textPrimary },
                          }}
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
                          if (
                            cantidadProducto > 0 &&
                            cantidadProducto < productDetail.stock
                          ) {
                            dispatch(
                              setCart({
                                quantity: cantidadProducto,
                                productId: productDetail.id,
                              })
                            );
                          } else {
                            Toast.fire({
                              icon: "error",
                              title: "Error al elegir cantidad de producto!",
                            });
                          }
                        }}
                      >
                        Enviar al carrito
                      </LoadingButton>
                    </Box>
                  </div>
                </div>
              ) : (
                <div className="SinStock">
                  <h3>No hay unidades disponibles</h3>
                </div>
              )}
            </div>
          </Box>
        </div>
      )}
      {/* Un problema para alguien del futuro que vea esto: al darle click a alguna card no se mostrara en pantalla debido a que solo se rendizar con useEffect */}
      {/* <div className="Products-more">
        <ProductsHome/>
      </div> */}
      <Box>
        <Typography
          component={"h2"}
          fontSize="28px"
          sx={{
            width: "100%",
            color: Theme[mode].textPrimary,
            textAlign: "center",
          }}
        >
          Mas productos
        </Typography>
        <Box
          display={"flex"}
          flexWrap="wrap"
          justifyContent={"center"}
          sx={{ marginBottom: "90px", width: "100%" }}
        >
          <Box sx={{ width: "100%", padding: "20px" }}>
            {console.log(url, urlRoute)}

            <Search
              style={{ padding: "0 10px", marginRight: "10px" }}
              onChange={(e) => {
                dispatch(searchProducts(e.target.value));
              }}
              sx={{
                flexGrow: 1,
                display: "block",
                color: Theme[mode].textPrimary,
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          {isLoading ? (
            <Loading />
          ) : status !== "error" ? (
            currentProducts.slice(0, widthX).map((product) => (
              <div key={product.id}>
                <ProductsCards
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.imageProduct}
                  rating={product.rating}
                />
              </div>
            ))
          ) : (
            <Alert
              severity="warning"
              sx={{ height: "max-content", margin: "20px 0" }}
            >
              {error}
            </Alert>
          )}
          <Paginated
            productsPerPage={productsPerPage}
            products={products.length}
            paginated={paginated}
          />
        </Box>
      </Box>
      <AppBar />
      <Waves />
    </div>
  );
};

export default ProductsDetails;
