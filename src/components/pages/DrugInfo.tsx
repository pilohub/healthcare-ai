import { useState } from "react";
import "./drug.css";

export default function DrugInfo() {
  const [drug, setDrug] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!drug.trim()) {
      alert("Enter medicine name");
      return;
    }

    setLoading(true);
    setData("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Give detailed information about ${drug} medicine in simple format:
          
1. Overview
2. Uses
3. Side Effects
4. Dosage
5. Precautions

Keep it short and student friendly.`,
        }),
      });

      const result = await res.json();

      setData(result.text);

    } catch (err) {
      console.log(err);
      alert("API Error");
    }

    setLoading(false);
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

      {/* LOADING */}
      {loading && <p style={{ marginTop: 20 }}>⏳ Getting info...</p>}

      {/* RESULT */}
      {data && (
  <div className="result-container">

    <div className="card">
      <h3>📄 Overview</h3>
      <p>{data.split("###")[1] || "No data"}</p>
    </div>

    <div className="card">
      <h3>🛡️ Uses</h3>
      <p>{data.split("###")[2] || "No data"}</p>
    </div>

    <div className="card">
      <h3>⚠️ Side Effects</h3>
      <p>{data.split("###")[3] || "No data"}</p>
    </div>

    <div className="card">
      <h3>💊 Dosage</h3>
      <p>{data.split("###")[4] || "No data"}</p>
    </div>

    <div className="card">
      <h3>🔒 Precautions</h3>
      <p>{data.split("###")[5] || "No data"}</p>
    </div>

  </div>
)}
      {/* NOTE */}
      <div className="note">
        ⚠️ This info is for education only. Consult a doctor.
      </div>

    </div>
  );
}