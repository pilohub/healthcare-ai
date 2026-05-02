import { useState } from "react";
import "./drug.css";

export default function DrugInfo() {
  const [drug, setDrug] = useState("");
  const [activeTab, setActiveTab] = useState("");
const handleSearch = async () => {
  if (!drug.trim()) {
    alert("Enter medicine name");
    return;
  }

  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Give detailed drug information for ${drug} including uses, side effects, dosage, and precautions.`,
      }),
    });

    const data = await res.json();

    console.log(data);

    setActiveTab("overview");

  } catch (err) {
    console.log(err);
    alert("API Error");
  }
};
  const getContent = () => {
    switch (activeTab) {
      case "overview":
        return "Basic information about the medicine.";
      case "uses":
        return "Used for pain relief, fever, infections, etc.";
      case "effects":
        return "May cause nausea, dizziness, or headache.";
      case "dosage":
        return "Take as prescribed by doctor.";
      case "precautions":
        return "Avoid overdose. Consult doctor.";
      default:
        return "Click any card to see details.";
    }
  };

  return (
    <div className="drug-page">

      {/* HEADER */}
      <div className="drug-header">
        <h1>💊 Drugs Info by AI</h1>
        <p>Get detailed, reliable AI-powered drug information</p>
      </div>

      {/* SEARCH */}
      <div className="search-box">

        <label>Enter medicine name</label>

        <div className="input-row">
          <input
            type="text"
            placeholder="Paracetamol, Ibuprofen..."
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
          />

          <button onClick={handleSearch}>
            ✨ Get Info
          </button>
        </div>

      </div>

      {/* CARDS */}
      <h3 className="section-title">What you can get</h3>

      <div className="features">

        <div className="card" onClick={() => setActiveTab("overview")}>
          📄
          <h4>Drug Overview</h4>
        </div>

        <div className="card" onClick={() => setActiveTab("uses")}>
          🛡️
          <h4>Uses</h4>
        </div>

        <div className="card" onClick={() => setActiveTab("effects")}>
          ⚠️
          <h4>Side Effects</h4>
        </div>

        <div className="card" onClick={() => setActiveTab("dosage")}>
          💊
          <h4>Dosage</h4>
        </div>

        <div className="card" onClick={() => setActiveTab("precautions")}>
          🔒
          <h4>Precautions</h4>
        </div>

      </div>

      {/* RESULT BOX */}
      <div className="result-box">
        <h3>Result</h3>
        <p>{getContent()}</p>
      </div>

      {/* NOTE */}
      <div className="note">
        ⚠️ This info is for education only. Consult a doctor.
      </div>

    </div>
  );
}