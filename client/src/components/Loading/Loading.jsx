import React from "react";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import "./index.scss";
const Loading = () => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  return (
    <section
      className="Loading-container"
      style={{ background: Theme[mode].primary }}
    >
      <Filter />
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
    </section>
  );
};
export default Loading;
