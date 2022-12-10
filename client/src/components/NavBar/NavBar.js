import React from "react";
import styles from "../NavBar/NavBar.module.css";
import logo from "../../img/LogoLogo.png";
import User from "../../img/User.png";

function NavBar() {
  return (
    <div className={styles.padd}>
      <img alt="image" className={styles.imagenLogo} src={logo} />
      <div className={styles.orde}>
        <button className={styles.button}>Home</button>
        <button className={styles.button1}>Other</button>
      </div>
      <img alt="image" className={styles.imgUser} src={User} />
    </div>
  );
}

export default NavBar;
