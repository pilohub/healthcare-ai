import Navbar from "../Navbar"; 
import { useNavigate } from "react-router-dom";
import "./home.css";


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="home">

        {/* 🚨 Banner */}
        <div className="banner">
          🚨 Emergency? Call <a href="tel:108">108</a>
        </div>

        {/* 🎯 Hero */}
        <div className="hero">
          <h1>
            Smart <span>CareX AI</span> Assistance
          </h1>
          <p>
            AI-powered platform for hospitals, students & emergency help.
          </p>

          <button onClick={() => navigate("/dashboard")}>
            🤖 Ask AI
          </button>
        </div>

        {/* ⚡ Cards */}
        <div className="grid">
          <div onClick={() => navigate("/hospitals")}>🏥 Find Hospitals</div>
          <div onClick={() => navigate("/emergency")}>🚑 Emergency Help</div>
          <div onClick={() => navigate("/contacts")}>📞 Contacts</div>
          <div onClick={() => navigate("/student")}>🎓 Student Portal</div>
        </div>

        {/* 📊 Status */}
        <div className="status">
          🚑 Ambulance ETA: <strong>15 mins</strong>
        </div>

        {/* 💡 Tips */}
        <div className="tips">
          <h3>💡 Health Tips</h3>
          <p>💧 Drink water | 😴 Sleep well | 🏃 Exercise</p>
        </div>

      </div>
    </>
  );
}