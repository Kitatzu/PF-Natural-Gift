import React from "react";
import logo from "../../img/LogoLogo.png";
import "./NavBar.css";

export default function NavBar() {
  return(
    <div className="Nav">
      <div className="Nav__Logo">
        <img className="Logo__Imagen" src={logo} alt="Logo"/>
      </div>
      <div className="Nav__Buttons">
        <div className="button">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div className="button">
          <i class="fa-solid fa-house"></i>
          <p>Other</p>
        </div>
      </div>
      <div className="Nav__Profile">
        <i class="fa-solid fa-user fa-2xl"></i>
      </div>
    </div>
  )  
}