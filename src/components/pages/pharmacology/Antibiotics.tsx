import "../physiology/physiology.css";

export default function Antibiotics() {
  return (
    <div className="page-container">
      <h1 className="page-title">🦠 Antibiotics</h1>
      <p className="page-sub">Drugs used to treat infections</p>

      <div className="section">
        <h3>📌 Types</h3>
        <ul className="list">
          <li>Penicillin</li>
          <li>Amoxicillin</li>
          <li>Tetracycline</li>
        </ul>
      </div>

      <div className="highlight">
        ⚠️ Always complete full antibiotic course.
      </div>
    </div>
  );
}