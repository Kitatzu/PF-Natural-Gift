import NavBar from "../NavBar/NavBar";
import ProductsCards from "../ProductsCards/ProductsCards";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Thunks/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.scss";
import { Alert } from "@mui/material";
import Loading from "../Loading/Loading";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search/Search";
import SearchIcon from "@mui/icons-material/Search";
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
import { searchProducts } from "../../Redux/Thunks/searchProducts";
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu.jsx";
import AppBar from "../AppBar/AppBar";

const url = window.location.href.split("/")[3].toLowerCase();
const urlRoute = window.location.href.split("/")[4];
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
      style={{
        background: Theme[mode].primary,
        minHeight: "100vh",
        height: "max-content",
      }}
    >
      <NavBar />
      <Box
        display={"flex"}
        justifyContent="space-between"
        sx={{
          minHeight: "100vh",

          background: Theme[mode].primary,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            background: Theme[mode].sidebar,
            display: { xs: "none", sm: "flex" },
          }}
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
          sx={{ marginBottom: "90px", width: { xs: "100%", md: "70%" } }}
        >
          <Box sx={{ width: "100%", padding: "20px" }}>
            {url === "productos" &&
            (urlRoute === "" || urlRoute === undefined) ? (
              <Search
                style={{ padding: "0 10px", marginRight: "10px" }}
                onChange={(e) => {
                  dispatch(searchProducts(e.target.value));
                }}
                sx={{
                  flexGrow: 1,
                  display: { xs: "block", sm: "none", md: "none" },
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
            ) : null}
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: "20px",
              display: { xs: "block", sm: "none" },
            }}
          >
            <CategoriesMenu />
          </Box>
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
      <AppBar />
    </div>
  );
};

export default Products;
