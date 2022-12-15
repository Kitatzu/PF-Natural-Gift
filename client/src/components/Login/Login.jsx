import FormLogin from "./FormLogin/FormLogin";
import Nav from "./Nav/Nav";
import "./Login.scss";
const Login = () => {
  return (
    <div className="Login-container">
      <Nav />
      <FormLogin />
    </div>
  );
};
export default Login;
