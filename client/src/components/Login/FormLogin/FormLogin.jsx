import React from "react";
import { Icon } from "@iconify/react";
import "./FormLogin.scss";

function FormLogin() {
  return (
    <form className="Form">
      <div className="Login-From-container-input">
        <input
          className="Login-Form"
          type="email"
          id="Email"
          placeholder="Enter Email"
        />
      </div>
      <div className="Login-From-container-input">
        <input
          className="Login-Form"
          type="password"
          placeholder="Enter Password"
        />
      </div>
      <div className="Buttons-Forms">
        <button className="LoginI">
          <span className="LoginI-icon">
            <Icon className="IconL" icon="ph:sign-in-light" />
          </span>
          <span>Login</span>
        </button>
        <button className="Sign">
          <span>
            <Icon className="IconG" icon="logos:google-icon" />
          </span>
          <span>Continue with Google</span>
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
