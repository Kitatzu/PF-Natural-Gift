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
  const mode = useSelector((state) => state.theme.mode);
  const Theme = useSelector((state) => state.theme);

  return (
    <nav className="Login-nav">
      <div className="Login-nav-logo">
        <Icon
          icon="ph:flame-fill"
          color={Theme[mode].textSecond}
          width="40"
          height="40"
        />
        <div className="Login-nav-logo-text">
          <span style={{ color: Theme[mode].textSecond }}>Natural</span>
          <span
            style={{
              fontWeight: "400",
              color: Theme[mode].textPrimary,
            }}
          >
            Gift
          </span>
        </div>
      </div>
      <div className="Login-nav-controllers">
        <ul className="Login-nav-links">
          <li>
            <button
              onClick={() => {
                setLoginType("login");
              }}
              style={{
                color: Theme[mode].textPrimary,
              }}
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => setLoginType("register")}
              style={{
                color: Theme[mode].textPrimary,
              }}
            >
              Register
            </button>
          </li>
        </ul>
        <MaterialUISwitch
          sx={{ m: 1 }}
          onChange={handleTheme}
          defaultChecked={mode === "dark"}
        />
      </div>
    </nav>
  );
};
export default Nav;
