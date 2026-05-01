import "./detail.css";

export default function Lab() {
  return (
    <div className="detail-page">

      <div className="detail-header">
        <h1>🧪 Laboratory Tests</h1>
        <p>Diagnostic tests used to detect diseases</p>
      </div>

      <div className="detail-grid">

        <div className="detail-card">
          <h3>📌 Tests</h3>
          <ul>
            <li>Blood test</li>
            <li>Urine test</li>
            <li>X-ray / MRI</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>📊 Reports</h3>
          <ul>
            <li>Hemoglobin levels</li>
            <li>WBC count</li>
            <li>Sugar levels</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>💡 Purpose</h3>
          <ul>
            <li>Disease detection</li>
            <li>Monitoring health</li>
            <li>Treatment guidance</li>
          </ul>
        </div>

      </div>

    </div>
  );
}