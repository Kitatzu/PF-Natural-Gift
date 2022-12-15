import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
import Nav from "./Nav/Nav";
import "./Login.scss";
const Login = () => {
  return (
    <div className="Login-container">
      <FormRegister />
      <Nav />
    </div>
  );
};
export default Login;
