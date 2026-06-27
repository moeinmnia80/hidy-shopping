const loadingStyles = `
  @keyframes drawInfinity {
    0%   { stroke-dashoffset: 900; opacity: 1; }
    60%  { stroke-dashoffset: 0;   opacity: 1; }
    80%  { stroke-dashoffset: 0;   opacity: 1; }
    100% { stroke-dashoffset: 0;   opacity: 0; }
  }

  @keyframes drawPetal1 { 0%,62%{stroke-dashoffset:220;opacity:0} 63%{opacity:1} 80%{stroke-dashoffset:0;opacity:1} 100%{stroke-dashoffset:0;opacity:1} }
  @keyframes drawPetal2 { 0%,67%{stroke-dashoffset:220;opacity:0} 68%{opacity:1} 83%{stroke-dashoffset:0;opacity:1} 100%{stroke-dashoffset:0;opacity:1} }
  @keyframes drawPetal3 { 0%,72%{stroke-dashoffset:220;opacity:0} 73%{opacity:1} 86%{stroke-dashoffset:0;opacity:1} 100%{stroke-dashoffset:0;opacity:1} }
  @keyframes drawPetal4 { 0%,77%{stroke-dashoffset:220;opacity:0} 78%{opacity:1} 90%{stroke-dashoffset:0;opacity:1} 100%{stroke-dashoffset:0;opacity:1} }
  @keyframes drawPetal5 { 0%,82%{stroke-dashoffset:220;opacity:0} 83%{opacity:1} 93%{stroke-dashoffset:0;opacity:1} 100%{stroke-dashoffset:0;opacity:1} }
  @keyframes drawPetal6 { 0%,87%{stroke-dashoffset:220;opacity:0} 88%{opacity:1} 97%{stroke-dashoffset:0;opacity:1} 100%{stroke-dashoffset:0;opacity:1} }
  @keyframes drawCenter  { 0%,90%{r:0;opacity:0} 91%{opacity:1} 100%{r:8px;opacity:1} }
  @keyframes fadeFlower  { 0%,59%{opacity:0} 80%{opacity:1} 100%{opacity:1} }

  .loading-infinity {
    fill: none;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: drawInfinity 4s cubic-bezier(0.4,0,0.2,1) infinite;
  }

  .loading-flower {
    animation: fadeFlower 4s linear infinite;
  }

  .loading-petal {
    fill: none;
    stroke-linecap: round;
    stroke-dasharray: 220;
  }

  .loading-petal-1 { animation: drawPetal1 4s ease-out infinite; }
  .loading-petal-2 { animation: drawPetal2 4s ease-out infinite; }
  .loading-petal-3 { animation: drawPetal3 4s ease-out infinite; }
  .loading-petal-4 { animation: drawPetal4 4s ease-out infinite; }
  .loading-petal-5 { animation: drawPetal5 4s ease-out infinite; }
  .loading-petal-6 { animation: drawPetal6 4s ease-out infinite; }

  .loading-center {
    animation: drawCenter 4s ease-out infinite;
  }
`;

const PETAL_PATH = "M0,-30 C-18,-30 -18,-62 0,-62 C18,-62 18,-30 0,-30Z";

function Loading({
  className = "",
  stroke = "currentColor",
  strokeWidth = 2.5,
  petalStrokeWidth = 2,
  ...props
}) {
  return (
    <>
      <style>{loadingStyles}</style>
      <svg
        viewBox="0 0 680 400"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        className={`
        fixed inset-0 w-full h-dvh z-10
        backdrop-blur-2xl bg-overlay
        stroke-secondary  
        ${className}`}
        {...props}
      >
        <path
          className="loading-infinity"
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="M340,200
             C340,165 365,145 390,155
             C420,165 440,185 440,200
             C440,215 420,235 390,245
             C365,255 340,235 340,200
             C340,165 315,145 290,155
             C260,165 240,185 240,200
             C240,215 260,235 290,245
             C315,255 340,235 340,200Z"
        />

        {/* Flower */}
        <g className="loading-flower" transform="translate(340,200)">
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <g key={deg} transform={`rotate(${deg})`}>
              <path
                className={`loading-petal loading-petal-${i + 1}`}
                stroke={stroke}
                strokeWidth={petalStrokeWidth}
                d={PETAL_PATH}
              />
            </g>
          ))}

          <circle className="loading-center" cx="0" cy="0" fill={stroke} />
        </g>
      </svg>
    </>
  );
}

export default Loading;
