import React from "react";
import Leaf from "../../Assets/img/Leaf.png";
import CreditCard from "../../Assets/img/Credit Card.png";
import Logo from "../../Assets/img/LogoNG.png";
import "./InfoSection.scss";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const InfoSection = () => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  return (
    <div className="InfoSection" style={{ background: Theme[mode].primary }}>
      <div className="CardInfo" style={{ background: Theme[mode].sidebar }}>
        <img src={Leaf} alt="Leaf" />
        <div className="CardInfo-text">
          <h2 style={{ color: Theme[mode].textPrimary }}>Eco-Friendly</h2>
          <Typography style={{ color: Theme[mode].textPrimary }}>
            Nuestros productos son 100% amigables con el medio ambiente, porque
            todo lo que nos brinda la naturaleza lo replantamos.
          </Typography>
        </div>
      </div>
      <div className="CardInfo" style={{ background: Theme[mode].sidebar }}>
        <img src={CreditCard} alt="Credit-card" />
        <div className="CardInfo-text">
          <h2 style={{ color: Theme[mode].textPrimary }}>Formas de Pago</h2>
          <Typography style={{ color: Theme[mode].textPrimary }}>
            Puedes pagar con tu tarjeta de débito/crédito en Paypal
          </Typography>
        </div>
      </div>
      <div className="CardIG">
        <img src={Logo} alt="Logo" />
        <div className="CardInfo-text">
          <h2>@NaturalGift</h2>
          <div className="IG">
            <i className="fa-brands fa-instagram fa-2xl"></i>
            <a href="https://www.instagram.com" target="_blank">
              <button className="CardIG-Button"> Seguir </button>
            </a>
          </div>
          <p>Tienda de productos naturales.</p>
          <p>Siguenos en Instagram.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
