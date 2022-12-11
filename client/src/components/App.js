import "./App.css";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar.jsx";
import { Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/Home"} component={Home} />
    </>
  );
}

export default App;
