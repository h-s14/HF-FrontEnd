import { React, useState, useEffect } from "react";

const SineWave = () => {
  const [width, setWidth] = useState(window.innerWidth * 0.9);
  const height = 100;
  const frequency = 0.03; // Adjust frequency for more/less waves
  const amplitude = 20; // Adjust amplitude for height of wave

  // Create the sine wave path
  const pathData = Array.from({ length: width }, (_, x) => {
    const y = amplitude * Math.sin(frequency * x) + height / 2;
    return `${x},${y}`;
  }).join(" ");
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <svg width={width} height={height}>
      {/* Define a linear gradient */}
      <defs>
        <linearGradient
          id="waveGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2={width}
          y1="0"
          y2="0"
        >
          <stop offset="0%" stopColor="#10B981" /> {/* Tailwind green-500 */}
          <stop offset="90%" stopColor="#3B82F6" /> {/* Tailwind blue-500 */}
        </linearGradient>
      </defs>

      {/* Apply the gradient to the stroke */}
      <polyline
        points={pathData}
        fill="none"
        stroke="url(#waveGradient)" // Reference the gradient here
        strokeWidth="2"
      />
    </svg>
  );
};

export default SineWave;
