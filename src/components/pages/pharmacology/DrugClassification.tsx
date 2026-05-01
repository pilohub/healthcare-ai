import "../physiology/physiology.css";

export default function DrugClassification() {
  return (
    <div className="page-container">
      <h1 className="page-title">💊 Drug Classification</h1>
      <p className="page-sub">Types of drugs based on their use</p>

      <div className="section">
        <h3>📌 Types</h3>
        <ul className="list">
          <li>Analgesics (Pain relief)</li>
          <li>Antibiotics (Infections)</li>
          <li>Antipyretics (Fever)</li>
          <li>Antiseptics</li>
        </ul>
      </div>

      <div className="highlight">
        💡 Understanding classification helps in proper drug usage.
      </div>
    </div>
  );
}