import "../physiology/physiology.css";

export default function DrugAdministration() {
  return (
    <div className="page-container">
      <h1 className="page-title">💉 Drug Administration</h1>
      <p className="page-sub">Routes of drug delivery</p>

      <div className="section">
        <h3>📌 Methods</h3>
        <ul className="list">
          <li>Oral</li>
          <li>Injection</li>
          <li>Topical</li>
        </ul>
      </div>

      <div className="highlight">
        💡 Route affects drug effectiveness.
      </div>
    </div>
  );
}