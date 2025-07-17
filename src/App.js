import "./App.css";
import React, { useState } from "react";

function App() {
  // States
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState(0);
  const [message, setmessage] = useState("");

  // Calculate BMI
  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const h = height / 100;
      const bmiValue = weight / (h * h);
      setbmi(bmiValue.toFixed(2)); // rounded to 2 decimals
      if (bmiValue < 18.5) {
        setmessage("You are underweight");
      } else if (bmiValue < 24.9) {
        setmessage("You are normal weight");
      } else {
        setmessage("You are overweight");
      }
    } else {
      setmessage("Please enter valid weight and height");
      setbmi(0);
    }
  };

  // Reset fields
  const reload = (e) => {
    e.preventDefault();
    setweight(0);
    setheight(0);
    setbmi(0);
    setmessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label htmlFor="weight">Weight (kg): </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="height">Height (cm): </label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Calculate BMI
            </button>
            <button className="btn1" onClick={reload}>
              Reset
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
