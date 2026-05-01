import "./detail.css";

export default function Neuro() {
  return (
    <div className="detail-page">

      <div className="detail-header">
        <h1>🧠 Neurological Disorders</h1>
        <p>Brain and nervous system related diseases</p>
      </div>

      <div className="detail-grid">

        <div className="detail-card">
          <h3>📌 Disorders</h3>
          <ul>
            <li>Stroke</li>
            <li>Epilepsy</li>
            <li>Parkinson's disease</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>⚠️ Symptoms</h3>
          <ul>
            <li>Headache</li>
            <li>Memory loss</li>
            <li>Seizures</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>💊 Treatment</h3>
          <ul>
            <li>Medication</li>
            <li>Therapy</li>
            <li>Rehabilitation</li>
          </ul>
        </div>

      </div>

    </div>
  );
}