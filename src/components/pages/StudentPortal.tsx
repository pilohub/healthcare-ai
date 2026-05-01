import { useNavigate } from "react-router-dom";
import "./student.css";

export default function StudentPortal() {
  const navigate = useNavigate();

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="logo">🧠 Medical</h2>

        <div className="menu">
          <p className="active" onClick={() => navigate("/home")}>🏠 Dashboard</p>

          <h4>SUBJECTS</h4>
          <p onClick={() => navigate("/anatomy")}>📚 Anatomy</p>
          <p onClick={() => navigate("/physiology")}>🧬 Physiology</p>
          <p onClick={() => navigate("/Pharmacology")}>💊 Pharmacology</p>
          <p onClick={() => navigate("/pathology")}>🦠 Pathology</p>
          <p onClick={() => navigate("/notes")}>📝 Notes</p>
          <p onClick={() => navigate("/quiz")}>❓ Quiz</p>

          <h4>TOOLS</h4>
          <p onClick={() => navigate("/bmi")}>❤️ BMI Calculator</p>
          <p onClick={() => navigate("/heart")}>🫀 Heart Rate</p>
          <p onClick={() => navigate("/drug")}>💉 Drug Info</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">
          <input
            className="search"
            placeholder="Search topics, notes, quizzes..."
          />
          <div className="profile">👤 Student</div>
        </div>

        {/* HEADER */}
        <h1 className="heading">Welcome back, Student! 👋</h1>
        <p className="sub">Learn • Practice • Explore</p>

        {/* SUBJECTS */}
        <h2 className="section">📚 Subjects</h2>

        <div className="cards">

          <div className="card" onClick={() => navigate("/anatomy")}>
            <span className="icon">📚</span>
            <h3>Anatomy</h3>
            <p>Human body structure</p>
            <span className="link">Explore →</span>
          </div>

          <div className="card" onClick={() => navigate("/physiology")}>
            <span className="icon">🧬</span>
            <h3>Physiology</h3>
            <p>Body functions</p>
            <span className="link">Explore →</span>
          </div>

          <div className="card" onClick={() => navigate("/pharmacology")}>
            <span className="icon">💊</span>
            <h3>Pharmacology</h3>
            <p>Medicines & drugs</p>
            <span className="link">Explore →</span>
          </div>

          <div className="card" onClick={() => navigate("/pathology")}>
            <span className="icon">🦠</span>
            <h3>Pathology</h3>
            <p>Diseases study</p>
            <span className="link">Explore →</span>
          </div>

          <div className="card" onClick={() => navigate("/notes")}>
            <span className="icon">📝</span>
            <h3>Notes</h3>
            <p>Quick revision notes</p>
            <span className="link">Explore →</span>
          </div>

          <div className="card" onClick={() => navigate("/quiz")}>
            <span className="icon">❓</span>
            <h3>Quiz</h3>
            <p>Test your knowledge</p>
            <span className="link">Explore →</span>
          </div>

        </div>

        {/* TOOLS */}
        <h2 className="section">⚡ Quick Tools</h2>

        <div className="tools">

          <div className="tool-card" onClick={() => navigate("/bmi")}>
            ❤️ <span>BMI Calculator</span>
          </div>

          <div className="tool-card" onClick={() => navigate("/heart")}>
            🫀 <span>Heart Rate</span>
          </div>

          <div className="tool-card" onClick={() => navigate("/drug")}>
            💉 <span>Drug Info</span>
          </div>

        </div>

      </div>

    </div>
  );
}