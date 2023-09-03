import "./App.css";
import { ClassTrafficLight } from "./ClassComponents/ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalComponents/FunctionalTrafficLight";

function App() {
  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight />
          </div>
          <div className="right">
            <ClassTrafficLight />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
