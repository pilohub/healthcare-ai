import "../physiology/physiology.css";

export default function PharmacologyStart() {
  return (
    <div className="page-container">

      <h1 className="page-title">💊 Pharmacology Learning</h1>
      <p className="page-sub">Learn drugs step-by-step</p>

      <div className="section">
        <h3>📚 Topics Covered</h3>

        <ul className="list">
          <li>Drug Classification</li>
          <li>Pharmacokinetics</li>
          <li>Pharmacodynamics</li>
          <li>Antibiotics</li>
          <li>Drug Administration</li>
          <li>Adverse Effects</li>
        </ul>
      </div>

      <div className="highlight">
        🎯 Master drugs for better medical understanding.
      </div>

    </div>
  );
}