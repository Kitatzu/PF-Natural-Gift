import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import "./ProductsCards.scss";

const ProductsCards = ( { id, name, price, image, rating} ) => {

  let rate = Number(rating);
  
  return (
    <Link to={`/products/${id}`}>
      <div className="ProductsCard">
        <img className="Product-img" src={image} alt={name}>  
        </img>
        <div className="Product-info">
          <div className="Product-details">
            <h3>{name}</h3>
            <div className="Products-details-flex">
              <p>${price}</p>
              <Rating 
                className="Product-rating"
                value={rate}
               />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductsCards; 