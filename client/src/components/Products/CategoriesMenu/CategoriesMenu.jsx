import * as React from "react";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

import { Button, MenuItem } from "@mui/material";

import { Menu } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { filterProducts } from "../../../Redux/Thunks/filterProducts";
const pages = ["Home", "Productos", "Sobre Nosotros"];

export default function CategoriesMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  const { categories = null } = useSelector((store) => store.categories);
  console.log(categories);
  const dispatch = useDispatch();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Button
        variant="contained"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        Categories
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {categories !== null
          ? categories.map((cat) => (
              <MenuItem key={cat.name} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  style={{ color: Theme[mode].textPrimary }}
                >
                  <Button onClick={(e) => dispatch(filterProducts(cat.name))}>
                    {cat.name}
                  </Button>
                </Typography>
              </MenuItem>
            ))
          : "No data found!"}
      </Menu>
    </>
  );
}
