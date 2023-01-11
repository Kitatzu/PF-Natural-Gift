import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem } from "@mui/material";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/material";
import { Tooltip, Button, Chip } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import MaterialUISwitch from "../MaterialUiSwitch/MaterialUiSwitch";
import { Icon } from "@iconify/react";
import { logout } from "../../Redux/Slices";
import { Link, Redirect } from "react-router-dom";
import "./NavBar.scss";
import { setTheme } from "../../Redux/Slices";
import { searchProducts } from "../../Redux/Thunks/searchProducts";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search/Search";
import { useEffect } from "react";
const pages = ["Home", "Productos", "Sobre Nosotros"];
let settings = ["Account", "Dashboard", "Logout"];

export default function NavBar() {
  useEffect(() => {
    if (userData.rol !== "Admin") {
      settings = settings.filter((set) => set !== "Dashboard");
      console.log(settings);
    }
  }, []);
  const handleTheme = (e) => {
    e.target.checked === true
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  };

  const userData = {};
  if (localStorage.getItem("token") !== null) {
    userData.avatar = JSON.parse(localStorage.getItem("token")).avatar;
    userData.name = JSON.parse(localStorage.getItem("token")).userName;
    userData.rol = JSON.parse(localStorage.getItem("token")).rol;
  }
  console.log(userData);

  const url = window.location.href.split("/")[3].toLowerCase();
  const urlRoute = window.location.href.split("/")[4];
  console.log(url);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [redSettings, setRedSettings] = React.useState(null);
  const settingFunction = {
    Logout: () => {
      localStorage.removeItem("token");
      dispatch(logout());
    },
    Account: () => {
      setRedSettings("account");
    },
    Dashboard: () => {
      setRedSettings("dashboard");
    },
    cart: () => {
      setRedSettings("cart");
    },
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSetting = (type) => {
    settingFunction[type]();
  };
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  const isLog = useSelector((store) => store.user.isLog);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isLog && <Redirect to="/login" />}
      {redSettings !== null && <Redirect to={"/" + redSettings} />}
      <AppBar
        position="static"
        style={{
          background:
            " linear-gradient(0deg, rgba(255,185,41,1) 0%, rgba(255,125,193,1) 100%)",
        }}
        sx={{ position: "relative", zIndex: 999 }}
      >
        <Toolbar>
          <Link to="/home">
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Icon
                icon="ph:flame-fill"
                color={"#f2f2f2"}
                width="40"
                height="40"
              />
              <div
                className="textLogo"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 10px",
                }}
              >
                <span style={{ color: "#ffff", fontWeight: "600" }}>
                  Natural
                </span>
                <span style={{ color: "#ffff", fontWeight: "400" }}>Gift</span>
              </div>
            </Box>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    style={{ color: Theme[mode].textPrimary }}
                  >
                    <Link to={"/" + page}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                style={{
                  margin: "0 20px",
                  fontFamily: "roboto",
                  color: "#ffff",
                  padding: "10px",
                }}
                to={"/" + page}
              >
                {page}
              </Link>
            ))}
          </Box>
          {url === "productos" &&
          (urlRoute === "" || urlRoute === undefined) ? (
            <Search
              style={{ padding: "0 10px", marginRight: "10px" }}
              onChange={(e) => {
                dispatch(searchProducts(e.target.value));
              }}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex", md: "flex" },
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

          <Box sx={{ flexGrow: 0 }}>
            <MaterialUISwitch
              onChange={handleTheme}
              defaultChecked={mode === "dark"}
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <div className="Nav-cart">
              <div className="Cart-bg"></div>
              <IconButton
                sx={{ color: "#f2f2f2" }}
                onClick={() => handleSetting("cart")}
              >
                <Icon
                  icon="material-symbols:shopping-cart-rounded"
                  width="25"
                  height="25"
                />
              </IconButton>
            </div>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Chip
                  avatar={<Avatar alt={userData.name} src={userData.avatar} />}
                  label={userData.name}
                  variant="outlined"
                  sx={{ maxWidth: "115px", overflow: "hidden" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  style={{ background: Theme[mode].primary }}
                >
                  <Button onClick={() => handleSetting(setting)}>
                    {setting}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
