import LiquidFilter from "../LiquidFilter/Filter";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="Loading-content">
      <LiquidFilter />
      <div className="loader">
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 4 }}></span>
        <span style={{ "--i": 5 }}></span>
        <span style={{ "--i": 6 }}></span>
        <span style={{ "--i": 7 }}></span>
        <span style={{ "--i": 8 }}></span>
        <span className="rotate" style={{ "--j": 1 }}></span>
        <span className="rotate" style={{ "--j": 2 }}></span>
        <span className="rotate" style={{ "--j": 3 }}></span>
        <span className="rotate" style={{ "--j": 4 }}></span>
      </div>
    </div>
  );
};
export default Loading;
