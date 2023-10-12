import "./App.css";
import { useState } from "react";

function App() {
  const [select, setSelect] = useState("");

  const handleClick = (e) => {
    setSelect(e.target.value);
  };
  return (
    <>
      <h1>LIFE</h1>
      <p>
        Select difficulty: <span>{select}</span>
      </p>
      <div class="btns">
        <button class="green" onClick={handleClick} value="Easy">
          Easy
        </button>
        <button class="yellow" onClick={handleClick} value="Medium">
          Medium
        </button>
        <button class="orange" onClick={handleClick} value="Hard">
          Hard
        </button>
        <button class="red" onClick={handleClick} value="2023">
          2023
        </button>
      </div>
    </>
  );
}

export default App;
