import { useState } from "react";
import Operations from "./components/Operations";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        {/* <Results /> */}
        <Operations />
      </main>
    </div>
  );
}

export default App;
