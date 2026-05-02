import { useState } from "react";
import "./notes.css";

export default function Notes() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
  if (!topic) {
    alert("Enter topic first");
    return;
  }

  setLoading(true);
  setNotes("");

  try {
    const res = await fetch("/api/gemini", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: `Generate short, exam-ready notes on ${topic}`,
  }),
});

const data = await res.json();

const text =
  data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

setNotes(text);

  } catch (err) {
    console.error(err);
    alert("Error generating notes");
  }

  setLoading(false);
};

  return (
    <div className="notes-page">

      <h1 className="notes-title">
        <span>AI</span> Notes Generator
      </h1>

      <p className="notes-sub">
        Get smart, concise and <b>exam-ready</b> notes in seconds
      </p>

      <div className="notes-box">

        <p>Enter a topic to generate notes</p>

        <input
          placeholder="Enter topic (e.g. Heart, Diabetes, Hypertension)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button onClick={handleGenerate}>
          {loading ? "Generating..." : "✨ Generate Notes"}
        </button>

      </div>

      {/* RESULT */}
      {notes && (
        <div className="notes-result">
          <h3>📄 Generated Notes:</h3>
          <p>{notes}</p>
        </div>
      )}

      

    
  


      {/* POWERED */}
      <p className="powered">🤖 Powered by AI</p>

      {/* FEATURES */}
      <div className="features">

        <div className="feature-card">
          📋
          <h3>Smart & Accurate</h3>
          <p>AI generates accurate and well-structured notes.</p>
        </div>

        <div className="feature-card">
          ⚡
          <h3>Save Time</h3>
          <p>Get exam-ready notes in just a few seconds.</p>
        </div>

        <div className="feature-card">
          📖
          <h3>Easy to Study</h3>
          <p>Well formatted notes that are easy to revise.</p>
        </div>

      </div>

    </div>
  );
}