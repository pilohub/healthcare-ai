import "./physiology.css";

export default function Respiratory() {
  return (
    <div className="page-container">

      <h1 className="page-title">🫁 Respiratory System</h1>
      <p className="page-sub">Breathing and gas exchange</p>

      <div className="section">
        <h3>📌 Overview</h3>
        <p>
          Helps in breathing and exchange of oxygen and carbon dioxide.
        </p>
      </div>

      <div className="section">
        <h3>⚙️ Organs</h3>
        <ul className="list">
          <li>Nose</li>
          <li>Lungs</li>
          <li>Trachea</li>
        </ul>
      </div>

      <div className="highlight">
        🚭 Avoid smoking to protect lungs.
      </div>

    </div>
  );
}