import "./detail.css";

export default function CellInjury() {
  return (
    <div className="detail-page">

      {/* HEADER */}
      <div className="detail-header">
        <h1>🧫 Cell Injury</h1>
        <p>Understanding causes, mechanisms and effects of cellular damage</p>
      </div>

      {/* CONTENT GRID */}
      <div className="detail-grid">

        {/* CARD 1 */}
        <div className="detail-card">
          <h3>📌 Causes</h3>
          <ul>
            <li>Hypoxia (low oxygen)</li>
            <li>Toxins & chemicals</li>
            <li>Infections</li>
            <li>Physical injury</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="detail-card">
          <h3>⚙️ Types</h3>
          <ul>
            <li>Reversible injury</li>
            <li>Irreversible injury</li>
            <li>Necrosis</li>
            <li>Apoptosis</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="detail-card">
          <h3>🧠 Effects</h3>
          <ul>
            <li>Cell swelling</li>
            <li>Protein damage</li>
            <li>DNA damage</li>
            <li>Cell death</li>
          </ul>
        </div>

      </div>

      {/* EXTRA SECTION */}
      <div className="info-box">
        <h3>💡 Quick Tip</h3>
        <p>
          Early detection of cell injury can prevent severe organ damage.
        </p>
      </div>

    </div>
  );
}