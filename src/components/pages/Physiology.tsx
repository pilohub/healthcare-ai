import "./student.css";

import { useNavigate } from "react-router-dom";

export default function Physiology() {
  const navigate = useNavigate();
  return (
    <div className="main">

      {/* HEADER */}
      <h1 className="heading">🧬 Physiology</h1>
      <p className="sub">Explore body systems & functions</p>

      {/* CARDS */}
      <div className="cards">

        <div className="card">
          <span className="icon">❤️</span>
          <h3>Circulatory System</h3>
          <p>Heart, blood vessels and blood flow.</p>
          <span className="link" onClick={() => navigate("/circulatory")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🫁</span>
          <h3>Respiratory System</h3>
          <p>Breathing, gas exchange and respiration.</p>
          <span className="link" onClick={() => navigate("/respiratory")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🧠</span>
          <h3>Nervous System</h3>
          <p>Brain, spinal cord and nerve functions.</p>
          <span className="link" onClick={() => navigate("/nervous")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🍽️</span>
          <h3>Digestive System</h3>
          <p>Food digestion and nutrient absorption.</p>
          <span className="link" onClick={() => navigate("/digestive")} >Explore →</span>
        </div>

        <div className="card">
          <span className="icon">🦴</span>
          <h3>Skeletal System</h3>
          <p>Bones, joints and body structure.</p>
          <span className="link " onClick={() => navigate("/skeletal")}>Explore →</span>
        </div>

        <div className="card">
          <span className="icon">💪</span>
          <h3>Muscular System</h3>
          <p>Muscles, movement and posture.</p>
          <span className="link" onClick={() => navigate("/muscular")}>Explore →</span>
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="cta">
        <div>
          <h3>Learn Physiology in a better way</h3>
          <p>
            Interactive content, clear diagrams and practice quizzes to strengthen your concepts.
          </p>
        </div>

        <button className="start-btn" onClick={() => navigate("/physiology-start")}>Start Learning</button>
      </div>

    </div>
  );
}