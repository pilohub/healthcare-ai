import "./detail.css";

export default function Cardiac() {
  return (
    <div className="detail-page">

      <div className="detail-header">
        <h1>❤️ Cardiac Diseases</h1>
        <p>Heart-related disorders and conditions</p>
      </div>

      <div className="detail-grid">

        <div className="detail-card">
          <h3>📌 Diseases</h3>
          <ul>
            <li>Heart attack</li>
            <li>Hypertension</li>
            <li>Arrhythmia</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>⚠️ Symptoms</h3>
          <ul>
            <li>Chest pain</li>
            <li>Shortness of breath</li>
            <li>Fatigue</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>💡 Prevention</h3>
          <ul>
            <li>Regular exercise</li>
            <li>Healthy diet</li>
            <li>Avoid smoking</li>
          </ul>
        </div>

      </div>

    </div>
  );
}