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
      <div className="toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <img src={Off} alt="" /> : <img src={On} alt="" />}
      </div>

      <main className={isDarkMode ? "Dark-calc" : "Light"}>
        <Operations isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
