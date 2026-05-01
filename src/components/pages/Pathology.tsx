import "./student.css";
import { useNavigate } from "react-router-dom";
export default function Pathology() {
  const navigate = useNavigate();
  return (
    <div className="main">

      {/* HEADER */}
      <h1 className="heading">🦠 Pathology</h1>
      <p className="sub">Study of diseases & conditions</p>

      {/* CARDS */}
      <div className="cards">

        <div className="card">
          <span className="icon">🧫</span>
          <h3>Cell Injury</h3>
          <p>Causes and effects of cell damage.</p>
          <span className="link "  onClick={() => navigate("/pathology/cell")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🦠</span>
          <h3>Infections</h3>
          <p>Bacterial, viral and fungal diseases.</p>
          <span className="link"onClick={() => navigate("/pathology/infection")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🧬</span>
          <h3>Genetic Disorders</h3>
          <p>Inherited and mutation-based diseases.</p>
          <span className="link "onClick={() => navigate("/pathology/genetic")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🫀</span>
          <h3>Cardiac Diseases</h3>
          <p>Heart-related disorders & conditions.</p>
          <span className="link "onClick={() => navigate("/pathology/cardiac")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🧠</span>
          <h3>Neurological Disorders</h3>
          <p>Brain and nervous system diseases.</p>
          <span className="link "onClick={() => navigate("/pathology/neuro")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🧪</span>
          <h3>Laboratory Tests</h3>
          <p>Diagnostic methods & reports.</p>
          <span className="link " onClick={() => navigate("/pathology/lab")}>Explore →</span>
        </div>

      </div>

      {/* BOTTOM CTA */}
      <div className="cta">
        <div>
          <h3>Learn Pathology in a better way</h3>
          <p>Interactive content, case studies & quizzes.</p>
        </div>

        <button className="start-btn"  onClick={() => navigate("/pathology/lab")}>Start Learning</button>
      </div>

    </div>
  );
}