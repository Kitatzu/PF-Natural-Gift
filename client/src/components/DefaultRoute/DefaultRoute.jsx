import { Redirect } from "react-router-dom";
import { useState } from "react";
import "./DefaultRoute.css";
const DefaultRoute = () => {
  const [redir, setRedir] = useState(false);
  setTimeout(() => setRedir(true), 3000);
  return (
    <>
      {redir ? (
        <Redirect to={"/home"} />
      ) : (
        <div className="DefaultRoute-content">
          <span>
            <i className="fa-sharp fa-solid fa-circle-radiation"></i>
          </span>
          <h2>404 Not Found!</h2>
          <p>The specified path was not found</p>
        </div>
      )}
    </>
  );
};
export default DefaultRoute;
