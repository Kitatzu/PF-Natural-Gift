import Mate from "../Assets/img/Mate.jpg";
import BtnSeeMore from "./BtnSeeMore/BtnSeeMore.jsx";
import "./ProductsCards.scss";

const ProductsCards = () => {
  return (
    <div className="ProductsCard">
      <img className="Product-img" src={Mate}/>
      <div className="Product-info">
        <div className="Product-details">
          <h3>Mate</h3>
          <p>$10.000</p>
        </div>
        <BtnSeeMore/>
      </div>
    </div>
  )
}

export default ProductsCards;