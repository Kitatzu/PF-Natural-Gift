import "./BtnSeeAll.scss";
import { Link } from "react-router-dom";

const BtnSeeAll = () => {
  return (
    <div>
      <button className="Button-See-All">
        <Link to="/products">
          Ver Todo
        </Link>
      </button>
    </div>
  )
}

export default BtnSeeAll;