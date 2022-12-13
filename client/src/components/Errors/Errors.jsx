import "./Errors.css";
const Errors = ({ type, msg }) => {
  return (
    <div className="Errors-content">
      <h1>{type}!</h1>
      <span>{msg}</span>
    </div>
  );
};
export default Errors;
