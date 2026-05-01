import "./emergency.css";

export default function Emergency() {
  return (
    <div className="emergency-page">
      <h1 className="emg-title">🚨 Emergency Help</h1>

      {/* MAIN */}
      <div className="emg-main glass">
        <h2>🚑 Ambulance</h2>
        <a href="tel:108" className="emg-btn pulse">
          📞 Call 108
        </a>
      </div>

      {/* GRID */}
      <div className="emg-grid">
        <div className="emg-card glass fire">
          <span>🔥</span>
          <h3>Fire</h3>
          <a href="tel:101">Call 101</a>
        </div>

        <div className="emg-card glass police">
          <span>👮‍♂️</span>
          <h3>Police</h3>
          <a href="tel:100">Call 100</a>
        </div>

        <div className="emg-card glass women">
          <span>👩</span>
          <h3>Women Helpline</h3>
          <a href="tel:1091">Call 1091</a>
        </div>

        <div className="emg-card glass child">
          <span>🧒</span>
          <h3>Child Helpline</h3>
          <a href="tel:1098">Call 1098</a>
        </div>

        <div className="emg-card glass disaster">
          <span>🌪️</span>
          <h3>Disaster</h3>
          <a href="tel:108">Help</a>
        </div>

        <div className="emg-card glass medical">
          <span>🏥</span>
          <h3>Medical</h3>
          <a href="tel:102">Call 102</a>
        </div>
      </div>
    </div>
  );
}