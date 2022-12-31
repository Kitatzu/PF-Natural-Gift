import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import defaultImage from "../Assets/img/imgDefault.png";
import "./ProductsCards.scss";
import { useSelector } from "react-redux";
const ProductsCards = ({ id, name, price, image, rating }) => {
  image = image ? image : defaultImage;
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  let rate = Number(rating);

  return (
    <Link to={`/productos/${id}`}>
      <div className="ProductsCard">
        <img className="Product-img" src={image} alt={name}></img>
        <div className="Product-info">
          <div className="Product-details">
            <h3 style={{ color: Theme[mode].textPrimary }}>{name}</h3>
            <div className="Products-details-flex">
              <p style={{ color: Theme[mode].textPrimary }}>${price}</p>
              <Rating className="Product-rating" value={rate} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCards;
