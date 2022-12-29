import "./BtnSeeAll.scss";
import { Link } from "react-router-dom";

const BtnSeeAll = () => {
  return (
    <div>
      <Link to="/products">
        <button className="Button-See-All">
          Ver Todo
        </button>
      </Link>
    </div>
  )
}

export default BtnSeeAll;