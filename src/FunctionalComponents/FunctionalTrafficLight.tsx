import FunctionalActiveLight from "./FunctionalActiveLight";
import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [activeLight, setActiveLight] = useState(0);

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <FunctionalActiveLight trafficLightClassIndex={activeLight} />
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          activeLight < 2 ? setActiveLight(activeLight + 1) : setActiveLight(0);
        }}
      >
        Next State
      </button>
    </div>
  );
};
