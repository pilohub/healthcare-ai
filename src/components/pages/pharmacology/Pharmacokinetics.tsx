import "../physiology/physiology.css";

export default function Pharmacokinetics() {
  return (
    <div className="page-container">
      <h1 className="page-title">🧪 Pharmacokinetics</h1>
      <p className="page-sub">ADME (Absorption, Distribution, Metabolism, Excretion)</p>

      <div className="section">
        <h3>📌 Steps</h3>
        <ul className="list">
          <li>Absorption</li>
          <li>Distribution</li>
          <li>Metabolism</li>
          <li>Excretion</li>
        </ul>
      </div>

      <div className="highlight">
        💡 ADME decides how drug works in body.
      </div>
    </div>
  );
}