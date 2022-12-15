import FormLogin from "./FormLogin/FormLogin";
import Nav from "./Nav/Nav";
import Waves from "../Waves/Waves";
import "./Login.scss";
import Presentation from "../Assets/img/Presentationlogin-presentation.png";
import { useState } from "react";
const Login = () => {
  const [loginType, setLoginType] = useState("login");
  return (
    <div className="Login-container">
      <Nav setLoginType={setLoginType} />
      <div className="Login-natural-gifts">
        <h1>Natural</h1>
        <h1>Gifts</h1>
      </div>

      {loginType === "login" ? <FormLogin /> : <div>Register</div>}

      <Waves />
      <div className="Login-presentation">
        <img src={Presentation} alt="presentation" />
      </div>
    </div>
  );
};
export default Login;