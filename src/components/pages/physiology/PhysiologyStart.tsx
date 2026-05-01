import "./physiologyStart.css";

export default function PhysiologyStart() {
  return (
    <div className="learn-page">

      <h1>🧬 Physiology Learning</h1>
      <p>Start learning body systems step by step</p>

      <div className="learn-grid">

        <div className="learn-card">
          ❤️ Circulatory System
          <p>Blood flow & heart function</p>
        </div>

        <div className="learn-card">
          🫁 Respiratory System
          <p>Breathing & oxygen exchange</p>
        </div>

        <div className="learn-card">
          🧠 Nervous System
          <p>Brain & nerve control</p>
        </div>

        <div className="learn-card">
          🍽 Digestive System
          <p>Food digestion</p>
        </div>

      </div>

    </div>
  );
}