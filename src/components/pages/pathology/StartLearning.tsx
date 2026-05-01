import "./detail.css";

export default function PathologyStart() {
  return (
    <div className="detail-page">

      <div className="detail-header">
        <h1>🚀 Start Learning Pathology</h1>
        <p>Master diseases with interactive learning</p>
      </div>

      <div className="detail-grid">

        <div className="detail-card">
          <h3>📚 Topics</h3>
          <p>Learn all major disease categories</p>
        </div>

        <div className="detail-card">
          <h3>🧠 AI Quiz</h3>
          <p>Test your knowledge instantly</p>
        </div>

        <div className="detail-card">
          <h3>📊 Case Study</h3>
          <p>Real-world medical scenarios</p>
        </div>

      </div>

      <button className="start-btn">
        🚀 Begin Learning
      </button>

    </div>
  );
}