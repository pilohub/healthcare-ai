import "./physiology.css";

export default function Skeletal() {
  return (
    <div className="page-container">

      <h1 className="page-title">🦴 Skeletal System</h1>
      <p className="page-sub">Bones and body structure</p>

      <div className="section">
        <h3>📌 Overview</h3>
        <p>Provides structure and protection to body.</p>
      </div>

      <div className="section">
        <h3>⚙️ Functions</h3>
        <ul className="list">
          <li>Support</li>
          <li>Protection</li>
          <li>Movement</li>
        </ul>
      </div>

      <div className="highlight">
        🥛 Calcium is important for strong bones.
      </div>

    </div>
  );
}