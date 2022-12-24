import BtnSeeMore from "./BtnSeeMore/BtnSeeMore.jsx";
import "./ProductsCards.scss";

const ProductsCards = ( {name, price, image} ) => {
  return (
    <div className="ProductsCard">
      <img className="Product-img" src={image} alt={name}/>
      <div className="Product-info">
        <div className="Product-details">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
        <BtnSeeMore/>
      </div>
    </div>
  )
}

export default ProductsCards;