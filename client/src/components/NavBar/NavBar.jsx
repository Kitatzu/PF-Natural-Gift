import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem } from "@mui/material";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/material";
import { Tooltip, Button, Chip } from "@mui/material";
import NaturalNG from "../Assets/img/LogoNG.png";
import { useDispatch, useSelector } from "react-redux";
import MaterialUISwitch from "../MaterialUiSwitch/MaterialUiSwitch";
import { Icon } from "@iconify/react";
import { logout } from "../../Redux/Slices";
import { Link, Redirect } from "react-router-dom";
import "./NavBar.scss";
import { setTheme } from "../../Redux/Slices";
const pages = ["Home", "Productos", "Sobre Nosotros"];
const settings = ["Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar() {
  const handleTheme = (e) => {
    e.target.checked === true
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  };

  const userData = {};
  if (localStorage.getItem("token") !== null) {
    userData.avatar = JSON.parse(localStorage.getItem("token")).avatar;
    userData.name = JSON.parse(localStorage.getItem("token")).name;
  }

  console.log(userData);
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
      setRedSettings("Dashboard")
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
      >
        <Toolbar>
          <Link to="/home">
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <img
                src={NaturalNG}
                alt="NaturalGift"
                style={{ width: "30px" }}
              />
              <div
                className="textLogo"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 10px",
                }}
              >
                <span style={{ color: Theme["light"].textPrimary }}>
                  Natural
                </span>
                <span style={{ color: Theme["light"].textPrimary }}>Gift</span>
              </div>
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
          <Search
            style={{ padding: "0 10px", marginRight: "10px" }}
            onChange={(e) => {
              console.log(e.target.value);
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
          <Box sx={{ flexGrow: 0 }}>
            <MaterialUISwitch
              onChange={handleTheme}
              defaultChecked={mode === "dark"}
            />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <div className="Nav-cart">
              <div className="Cart-bg"></div>
              <IconButton sx={{ color: "#f2f2f2" }}>
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
                  avatar={<Avatar alt="Natacha" src={userData.avatar} />}
                  label={userData.name}
                  variant="outlined"
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
