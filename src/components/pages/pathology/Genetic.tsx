import "./detail.css";

export default function Genetic() {
  return (
    <div className="detail-page">

      <div className="detail-header">
        <h1>🧬 Genetic Disorders</h1>
        <p>Study of inherited diseases caused by gene mutations</p>
      </div>

      <div className="detail-grid">

        <div className="detail-card">
          <h3>📌 Causes</h3>
          <ul>
            <li>Gene mutation</li>
            <li>Chromosomal defects</li>
            <li>Inherited traits</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>⚠️ Examples</h3>
          <ul>
            <li>Down Syndrome</li>
            <li>Sickle Cell Anemia</li>
            <li>Hemophilia</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>🧪 Diagnosis</h3>
          <ul>
            <li>Genetic testing</li>
            <li>Family history</li>
            <li>Prenatal screening</li>
          </ul>
        </div>

      </div>

      <div className="info-box">
        <p>Early detection helps manage genetic conditions effectively.</p>
      </div>

    </div>
  );
}