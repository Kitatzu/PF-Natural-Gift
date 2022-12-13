import React from "react";

const LiquidFilter = () => {
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
export default LiquidFilter;
