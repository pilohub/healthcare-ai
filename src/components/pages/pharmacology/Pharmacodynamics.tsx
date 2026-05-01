import "../physiology/physiology.css";

export default function Pharmacodynamics() {
  return (
    <div className="page-container">
      <h1 className="page-title">⚗️ Pharmacodynamics</h1>
      <p className="page-sub">How drugs affect the body</p>

      <div className="section">
        <h3>📌 Concepts</h3>
        <ul className="list">
          <li>Drug receptors</li>
          <li>Dose-response</li>
          <li>Therapeutic effects</li>
        </ul>
      </div>

      <div className="highlight">
        💡 Focus on drug action mechanism.
      </div>
    </div>
  );
}