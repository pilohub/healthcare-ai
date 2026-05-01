import "./student.css";
import { useNavigate } from "react-router-dom";

export default function Pharmacology() {
     const navigate = useNavigate(); 
  return (
    <div className="main">

      {/* HEADER */}
      <h1 className="heading">💊 Pharmacology</h1>
      <p className="sub">Study of drugs, actions & effects</p>

      {/* CARDS */}
      <div className="cards">

        <div className="card">
          <span className="icon">💊</span>
          <h3>Drug Classification</h3>
          <p>Types of drugs based on their use.</p>
          <span className="link" onClick={() => navigate("/drugclassification")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">⚗️</span>
          <h3>Pharmacokinetics</h3>
          <p>Absorption, distribution, metabolism & excretion.</p>
          <span className="link " onClick={() => navigate("/pharmacokinetics")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🧪</span>
          <h3>Pharmacodynamics</h3>
          <p>How drugs affect the body.</p>
          <span className="link" onClick={() => navigate("/pharmacodynamics")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🦠</span>
          <h3>Antibiotics</h3>
          <p>Drugs used to treat bacterial infections.</p>
          <span className="link " onClick={() => navigate("/antibiotics")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">💉</span>
          <h3>Drug Administration</h3>
          <p>Routes of drug delivery methods.</p>
          <span className="link " onClick={() => navigate("/drug-administration")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">⚠️</span>
          <h3>Adverse Effects</h3>
          <p>Side effects and drug reactions.</p>
          <span className="link" onClick={() => navigate("/adverse-effects")}>Explore →</span>
        </div>

      </div>

      {/* CTA */}
      <div className="cta">
        <div>
          <h3>Learn Pharmacology in a better way</h3>
          <p>
            Understand drugs, mechanisms and clinical use with interactive learning.
          </p>
        </div>

        <button className="start-btn" onClick={() => navigate("/pharmacologystart")}>Start Learning</button>
      </div>

    </div>
  );
}