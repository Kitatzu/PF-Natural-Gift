import BtnSeeMore from "./BtnSeeMore/BtnSeeMore.jsx";
import "./ProductsCards.scss";

const ProductsCards = ( { id, name, price, image} ) => {
  return (
    <div key={id} className="ProductsCard">
      <img className="Product-img" src={image} alt={name}>  
      </img>
      <div className="Product-info">
        <div className="Product-details">
          <h3>{name}</h3>
          <div className="Products-details-flex">
            <p>${price}</p>
            <BtnSeeMore
              productId = {id}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCards;