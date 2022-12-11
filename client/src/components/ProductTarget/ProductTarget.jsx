import "./ProductTarget.css";
import { React } from "react";
import { Link } from "react-router-dom";

const ProductTarget = ({ id, contents, name, price, vegan, image }) => {
  return (
    <div
      className="targetCard"
      id={id}
      style={{
        background: `url(https://thebeeminelab.com/wp-content/uploads/2022/11/Aceite-3-2.jpg)`,
      }}
    >
      <span className="targetPrice">{price}$</span>
      <div className="targetCardInfo">
        <h3 className="targetCardName">{name}</h3>
        <p>{contents}</p>
        {vegan && <p className="targetVegan">Vegan</p>}
        <div className="targetButton">
          <Link className="productInfoButton">
            <i className="fa-solid fa-eye"></i>
            <span>View More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductTarget;
