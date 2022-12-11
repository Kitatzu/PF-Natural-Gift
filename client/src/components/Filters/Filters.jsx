import React from "react";
import "./Filters.css";

export default function Filter() {
  return (
    <div className="Filters">
      <div>
        <span className="Icon"><i className="fa-solid fa-magnifying-glass fa-lg"></i></span>
        <input className="Input__Text" type="text" placeholder="Search"/>
      </div>
      <div className="Input">
        <select className="Input__Select">
          <option>Filter</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="Input">
        <select className="Input__Select">
          <option>Order By</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  )
}