import React from "react";

const Filter = () => {
  return (
    <svg>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        <feColorMatrix
          values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -10"
        ></feColorMatrix>
      </filter>
    </svg>
  );
};
export default Filter;
