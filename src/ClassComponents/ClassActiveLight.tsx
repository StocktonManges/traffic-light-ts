import { Component } from "react";
import trafficLightClasses from "../TrafficLightData";

export default class ClassActiveLight extends Component<{
  trafficLightClassIndex: number;
}> {
  render() {
    const activeClasses =
      trafficLightClasses[this.props.trafficLightClassIndex];
    return (
      <>
        <div className={"circle " + activeClasses[0]}></div>
        <div className={"circle " + activeClasses[1]}></div>
        <div className={"circle " + activeClasses[2]}></div>
      </>
    );
  }
}
