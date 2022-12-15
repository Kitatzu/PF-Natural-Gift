import "./Nav.scss";
const Nav = () => {
  return (
    <nav className="Login-nav">
      <ul>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Register</button>
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
