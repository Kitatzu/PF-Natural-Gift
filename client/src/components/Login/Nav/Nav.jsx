import "./Nav.scss";
import { Icon } from "@iconify/react";
import MaterialUISwitch from "../../MaterialUiSwitch/MaterialUiSwitch";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../Redux/Slices";
import { useSelector } from "react-redux";
const Nav = ({ setLoginType }) => {
  const dispatch = useDispatch();
  const handleTheme = (e) => {
    e.target.checked === true
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  };
  const theme = useSelector((state) => state.theme.mode);
  const lightTheme = useSelector((state) => state.theme.light);
  const darkTheme = useSelector((state) => state.theme.dark);
  return (
    <nav className="Login-nav">
      <div className="Login-nav-logo">
        <Icon
          icon="ph:flame-fill"
          color={darkTheme.textSecond}
          width="40"
          height="40"
        />
        <div className="Login-nav-logo-text">
          <span style={{ color: darkTheme.textSecond }}>Natural</span>
          <span
            style={{
              fontWeight: "400",
              color:
                theme === "dark"
                  ? darkTheme.textPrimary
                  : lightTheme.textPrimary,
            }}
          >
            Gift
          </span>
        </div>
      </div>
      <div className="Login-nav-controllers">
        <ul>
          <li>
            <button
              onClick={() => {
                setLoginType("login");
              }}
              style={{
                color:
                  theme === "dark"
                    ? darkTheme.textPrimary
                    : lightTheme.textPrimary,
              }}
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => setLoginType("register")}
              style={{
                color:
                  theme === "dark"
                    ? darkTheme.textPrimary
                    : lightTheme.textPrimary,
              }}
            >
              Register
            </button>
          </li>
        </ul>
        <MaterialUISwitch sx={{ m: 1 }} onChange={handleTheme} />
      </div>
    </nav>
  );
};
export default Nav;
