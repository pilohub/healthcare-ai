import "../physiology/physiology.css";

export default function AdverseEffects() {
  return (
    <div className="page-container">
      <h1 className="page-title">⚠️ Adverse Effects</h1>
      <p className="page-sub">Side effects of drugs</p>

      <div className="section">
        <h3>📌 Examples</h3>
        <ul className="list">
          <li>Nausea</li>
          <li>Allergy</li>
          <li>Dizziness</li>
        </ul>
      </div>

      <div className="highlight">
        🚨 Consult doctor if side effects occur.
      </div>
    </div>
  );
}