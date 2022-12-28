import "./BtnSeeMore.scss";
import { Link } from "react-router-dom";

const BtnSeeMore = ( {productId} ) => {
  return (
    <>
      <button className="See-more">
        <Link to={'/products/' + productId}>
          Ver
        </Link>
      </button>
    </>
  )
}

export default BtnSeeMore;