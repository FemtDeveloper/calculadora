import React, { useState } from "react";
import "./Results.css";

const Results = () => {
  const [result, setResult] = useState(0);
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(i);
  }
  console.log(digits);
  return (
    <div className="result-container">
      <h2>{result}</h2>
      {digits.map((i) => (
        <button key={i}>{i}</button>
      ))}
    </div>
  );
};

export default Results;
