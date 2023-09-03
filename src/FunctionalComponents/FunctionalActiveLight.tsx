import trafficLightClasses from "../TrafficLightData";

type objProps = {
  trafficLightClassIndex: number;
};

export default function FunctionalActiveLight({
  trafficLightClassIndex,
}: objProps) {
  const activeClasses = trafficLightClasses[trafficLightClassIndex];
  return (
    <>
      <div className={"circle " + activeClasses[0]}></div>
      <div className={"circle " + activeClasses[1]}></div>
      <div className={"circle " + activeClasses[2]}></div>
    </>
  );
}
