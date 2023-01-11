import { Link } from "react-router-dom";
import Waves from "../Waves/WavesLogin/WavesLogin";
import "./DefaultRoute.scss";

const DefaultRoute = () => {
  return (
      <div className="Default">
        <h1 className="Default-text">Este lugar no existe - Error 404 </h1>
        <Link to='/home' className="Default-btn">Volver al Home</Link>
        <Waves/>
      </div>
    )
};
export default DefaultRoute;
