import React from "react";
import Leaf from "../../Assets/img/Leaf.png";
import CreditCard from "../../Assets/img/Credit Card.png";
import Logo from "../../Assets/img/LogoNG.png";
import "./InfoSection.scss";

const InfoSection = () => {
  return (
    <div className="InfoSection">
      <div className="CardInfo">
        <img src={Leaf} alt="Leaf"/>
        <div className="CardInfo-text">
          <h2>Eco-Friendly</h2>
          <p>Nuestros productos son 100% amigables con el medio ambiente, porque todo lo que nos brinda la naturaleza lo replantamos.</p>
        </div>
      </div>
      <div className="CardInfo">
        <img src={CreditCard} alt="Credit-card"/>
        <div className="CardInfo-text">
          <h2>Formas de Pago</h2>
          <p>Puedes pagar con tu tarjeta de débito/crédito en Mercadopago o mediante transferencia a nuestra cuenta RUT.</p>
        </div>
      </div>
      <div className="CardIG">
        <img src={Logo} alt="Logo"/>
        <div className="CardInfo-text">
          <h2>@NaturalGift</h2>
          <div className="IG">
            <i className="fa-brands fa-instagram fa-2xl"></i><a href="https://www.instagram.com" target="_blank"><button className="CardIG-Button"> Seguir </button></a>
          </div>
          <p>Tienda de productos naturales.</p>
          <p>Siguenos en Instagram.</p>
        </div>
      </div>
    </div>
  )
}

export default InfoSection;