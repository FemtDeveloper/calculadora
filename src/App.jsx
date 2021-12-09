import { useState } from "react";
import Operations from "./components/Operations";
import "./App.css";
import On from "./icons/lightbulb-on.png";
import Off from "./icons/light-bulb-off.png";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? "App Dark" : "App Light"}>
      {isDarkMode ? (
        <div className="toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          <h4>Set light mode</h4> <img src={On} alt="" />
        </div>
      ) : (
        <div className="toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          <h4>Set dark mode</h4>
          <img src={Off} alt="" />
        </div>
      )}
      <main className={isDarkMode ? "Dark-calc" : "Light"}>
        <Operations />
      </main>
    </div>
  );
}

export default App;
