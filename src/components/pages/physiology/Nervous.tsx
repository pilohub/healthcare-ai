import "./physiology.css";

export default function Nervous() {
  return (
    <div className="page-container">

      <h1 className="page-title">🧠 Nervous System</h1>
      <p className="page-sub">Brain and nerve control</p>

      <div className="section">
        <h3>📌 Overview</h3>
        <p>
          Controls body activities and responds to stimuli.
        </p>
      </div>

      <div className="section">
        <h3>⚙️ Parts</h3>
        <ul className="list">
          <li>Brain</li>
          <li>Spinal cord</li>
          <li>Nerves</li>
        </ul>
      </div>

      <div className="highlight">
        🧠 Sleep well for brain health.
      </div>

    </div>
  );
}