import logo from "./logo.svg";
import "./App.css";
import Pagination from "./components/Pagination";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  function getBoxes() {
    const boxes = [0, 1, 2].map((i) => {
      return [0, 1, 2].map((j) => {
        if (!(i === 1 && j > 1)) {
          return <div className="box" onClick={colorClicked}></div>;
        }
        return <div></div>;
      });
    });
    return boxes;
  }

  const colorClicked = () => {
    setColor({ style: { backgroundColor: "green" } });
    console.log("clicked");
  };
  return (
    <div className="App">
      <div className="box_container">{getBoxes()}</div>
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
