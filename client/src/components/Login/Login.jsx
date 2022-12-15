import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
import Nav from "./Nav/Nav";
import Waves from "../Waves/Waves";
import "./Login.scss";
const Login = () => {
  return (
    <div className="Login-container">
      <FormRegister />
      <Nav />
      <Waves />
    </div>
  );
};
export default Login;
