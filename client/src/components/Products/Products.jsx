import NavBar from "../NavBar/NavBar";
import ProductsCards from "../ProductsCards/ProductsCards";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Thunks/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.scss";
import { Alert } from "@mui/material";
import Loading from "../Loading/Loading";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListSubheader,
} from "@mui/material";
import { getCategories } from "../../Redux/Thunks/Categories";
import { filterProducts } from "../../Redux/Thunks/filterProducts";
const Products = () => {
  const { products = [] } = useSelector((state) => state.products);
  const { status, error } = useSelector((state) => state.products);
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  const isLoading = useSelector((store) => store.products.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);
  const { categories = null } = useSelector((store) => store.categories);
  console.log(categories);
  return (
    <div
      className="Products"
      style={{ background: Theme[mode].primary, minHeight: "100vh" }}
    >
      <NavBar />
      <Box
        display={"flex"}
        justifyContent="space-between"
        sx={{ minHeight: "100vh" }}
      >
        <Box
          sx={{ width: "100%", maxWidth: 360, background: Theme[mode].sidebar }}
        >
          <List
            component="nav"
            aria-label="secondary mailbox folder"
            subheader={
              <ListSubheader
                sx={{
                  color: Theme[mode].textPrimary,
                  background: Theme[mode].sidebar,
                }}
              >
                Categories
              </ListSubheader>
            }
          >
            <Divider />
            {categories !== null ? (
              categories.map((cat) => (
                <>
                  <ListItemButton
                    onClick={(e) => dispatch(filterProducts(cat.name))}
                  >
                    <ListItemText
                      primary={cat.name}
                      sx={{ color: Theme[mode].textPrimary }}
                    />
                  </ListItemButton>
                </>
              ))
            ) : (
              <ListItemButton>
                <Alert severity="warning">No hay categorias!</Alert>
              </ListItemButton>
            )}
          </List>
        </Box>
        <Box
          display={"flex"}
          flexWrap="wrap"
          justifyContent={"center"}
          sx={{ width: "70%" }}
        >
          {isLoading ? (
            <Loading />
          ) : status !== "error" ? (
            products.map((product) => (
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
        </Box>
      </Box>
    </div>
  );
};

export default Products;
