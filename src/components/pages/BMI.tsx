import { useState } from "react";
import "./bmi.css";

export default function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = Number(height) / 100;
    const result = Number(weight) / (h * h);
    setBmi(Number(result.toFixed(1)));
  };

  const getStatus = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obesity";
  };

  return (
    <div className="bmi-page">

      {/* HEADER */}
      <h1 className="title">❤️ BMI Calculator</h1>
      <p className="sub">Check your Body Mass Index easily</p>

      <div className="bmi-container">

        {/* LEFT FORM */}
        <div className="bmi-form">

          <h3>Enter your details</h3>

          <input
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <button onClick={calculateBMI}>
            Calculate BMI
          </button>

        </div>

        {/* RIGHT RESULT */}
        <div className="bmi-result">

          <h3>Your BMI</h3>

          <div className="circle">
            {bmi ? bmi : "--"}
          </div>

          <p className="status">{getStatus()}</p>

        </div>

      </div>

      {/* CATEGORY */}
      <div className="categories">

        <div className="cat blue">
          <h4>Underweight</h4>
          <p>&lt; 18.5</p>
        </div>

        <div className="cat green">
          <h4>Normal</h4>
          <p>18.5 – 24.9</p>
        </div>

        <div className="cat orange">
          <h4>Overweight</h4>
          <p>25 – 29.9</p>
        </div>

        <div className="cat red">
          <h4>Obesity</h4>
          <p>≥ 30</p>
        </div>

      </div>

    </div>
  );
}