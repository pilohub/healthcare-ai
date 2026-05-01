import "./physiology.css";

export default function Circulatory() {
  return (
    <div className="page-container">

      <div className="page-header">
        <h1 className="page-title">❤️ Circulatory System</h1>
        <p className="page-sub">Heart, blood vessels and blood flow</p>
      </div>

      <div className="section">
        <h3>📌 Overview</h3>
        <p>
          The circulatory system transports oxygen, nutrients and hormones
          throughout the body.
        </p>
      </div>

      <div className="section">
        <h3>⚙️ Main Parts</h3>
        <ul className="list">
          <li>❤️ Heart – pumps blood</li>
          <li>🩸 Blood – carries oxygen</li>
          <li>🧵 Blood vessels – transport system</li>
        </ul>
      </div>

      <div className="section">
        <h3>💡 Functions</h3>
        <ul className="list">
          <li>Oxygen supply</li>
          <li>Nutrient transport</li>
          <li>Waste removal</li>
        </ul>
      </div>

      <div className="highlight">
        💡 Tip: Keep your heart healthy with exercise and good diet.
      </div>

    </div>
  );
}