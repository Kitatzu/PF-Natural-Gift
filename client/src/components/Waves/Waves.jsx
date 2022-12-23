import "./Waves.scss";

const Waves = () => {
  return (
    <div className="Wave">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(255, 185, 41, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 125, 193, 1)" offset="100%"></stop>
          </linearGradient>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="1"
            fill="url(#sw-gradient-0)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
