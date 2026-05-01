import { useState } from "react";
import "./heartrate.css";

export default function HeartRate() {
  const [age, setAge] = useState("");
  const [range, setRange] = useState("60 - 100");

  const calculate = () => {
    if (!age) return;

    const a = Number(age);

    // simple logic
    const max = 220 - a;
    const min = Math.round(max * 0.5);
    const target = Math.round(max * 0.85);

    setRange(`${min} - ${target}`);
  };

  return (
    <div className="hr-page">

      {/* HEADER */}
      <h1 className="title">❤️ Heart Rate Calculator</h1>
      <p className="sub">
        Check your heart rate and monitor your health
      </p>

      <div className="hr-container">

        {/* LEFT */}
        <div className="hr-form">

          <h3>Enter your age</h3>

          <input
            placeholder="e.g. 25"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button onClick={calculate}>
            Calculate Heart Rate
          </button>

          <p className="privacy">🔒 Your data is private and secure</p>

        </div>

        {/* RIGHT */}
        <div className="hr-result">

          <h3>Your Heart Rate Range</h3>

          <div className="circle">
            ❤️
            <span>{range}</span>
            <p>bpm</p>
          </div>

          <p className="status">Normal Range</p>

          <div className="info">
            A normal resting heart rate for adults is 60–100 bpm.
          </div>

        </div>

      </div>

      {/* TIPS */}
      <div className="tips">

        <div className="tip">
          💜
          <h4>Resting Heart Rate</h4>
          <p>Normal: 60–100 bpm</p>
        </div>

        <div className="tip">
          🏃
          <h4>Stay Active</h4>
          <p>Exercise keeps heart healthy</p>
        </div>

        <div className="tip">
          📊
          <h4>Monitor Regularly</h4>
          <p>Track your heart rate daily</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="health">
        💡 Health Tip: Eat healthy, reduce stress, and sleep well.
      </div>

    </div>
  );
}