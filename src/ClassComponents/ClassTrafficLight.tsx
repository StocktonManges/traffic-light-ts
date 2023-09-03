import { Component } from "react";
import ClassActiveLight from "./ClassActiveLight";

export class ClassTrafficLight extends Component {
  state = {
    activeLight: 0,
  };
  render() {
    const activeLight = this.state.activeLight;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <ClassActiveLight trafficLightClassIndex={activeLight} />
        </div>
        <button
          className="next-state-button"
          onClick={() => {
            activeLight < 2
              ? this.setState({ activeLight: activeLight + 1 })
              : this.setState({ activeLight: 0 });
          }}
        >
          Next State
        </button>
      </div>
    );
  }
}
