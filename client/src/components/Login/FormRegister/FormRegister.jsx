import React from "react";
import "./FormRegister.scss";
import { Icon } from "@iconify/react";

function FormRegister() {
  return (
    <form className="Form-Register">
      <div>
        <input className="Input-Register" type="text" placeholder="Name" />

        <input
          className="Input-Register"
          type="email"
          placeholder="Enter Email"
        />
        <input
          className="Input-Register"
          type="password"
          placeholder="Enter Password"
        />
        <input
          className="Input-Register"
          type="password"
          placeholder="Repeat your Password"
        />
      </div>
      <div className="Buttons-Forms">
        <button className="LoginI">
          <span>
            <Icon className="IconL" icon="ph:sign-in-light" />
          </span>
          <span>Sing Up</span>
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

export default FormRegister;
