import "./physiology.css";

export default function Digestive() {
  return (
    <div className="page-container">

      <h1 className="page-title">🍽 Digestive System</h1>
      <p className="page-sub">Food digestion and absorption</p>

      <div className="section">
        <h3>📌 Overview</h3>
        <p>Breaks food into nutrients for energy.</p>
      </div>

      <div className="section">
        <h3>⚙️ Organs</h3>
        <ul className="list">
          <li>Stomach</li>
          <li>Intestines</li>
          <li>Liver</li>
        </ul>
      </div>

      <div className="highlight">
        🥗 Eat healthy food for better digestion.
      </div>

    </div>
  );
}