import "./physiology.css";

export default function Muscular() {
  return (
    <div className="page-container">

      <h1 className="page-title">💪 Muscular System</h1>
      <p className="page-sub">Movement and strength</p>

      <div className="section">
        <h3>📌 Overview</h3>
        <p>Helps in movement and posture.</p>
      </div>

      <div className="section">
        <h3>⚙️ Types</h3>
        <ul className="list">
          <li>Skeletal muscle</li>
          <li>Smooth muscle</li>
          <li>Cardiac muscle</li>
        </ul>
      </div>

      <div className="highlight">
        💪 Exercise daily to keep muscles strong.
      </div>

    </div>
  );
}