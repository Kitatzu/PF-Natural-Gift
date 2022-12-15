import "./Nav.scss";

const Nav = ({ setLoginType }) => {
  return (
    <nav className="Login-nav">
      <ul>
        <li>
          <button
            onClick={() => {
              setLoginType("login");
            }}
          >
            Login
          </button>
        </li>
        <li>
          <button onClick={() => setLoginType("register")}>Register</button>
        </li>
      </ul>
      <button className="Login-switch-theme">
        <span className="Login-nav-button-ball"></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Nav;
