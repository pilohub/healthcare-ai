import { useState } from "react";
import "./quiz.css";

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

 const handleStart = async () => {
  if (!topic.trim()) {
    alert("Please enter a topic");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Generate 5 MCQ quiz questions on ${topic}.
Return ONLY JSON format like:
[
  {
    "question": "",
    "options": ["A","B","C","D"],
    "answer": ""
  }
]`,
      }),
    });

    const data = await res.json();

    const text = data.candidates[0].content.parts[0].text;

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    setQuestions(parsed);

  } catch (err) {
    console.log(err);
    alert("API Error or Invalid JSON");
  }

  setLoading(false);
};
  return (
    <div className="quiz-page">

      {/* TITLE */}
      <h1 className="quiz-title">
        <span>AI</span> Quiz
      </h1>

      <p className="quiz-sub">
        Test your knowledge and improve your understanding
      </p>

      {/* INPUT BOX */}
      <div className="quiz-box">

        <p className="quiz-label">
          Enter a topic to generate quiz
        </p>

        <input
          type="text"
          placeholder="Enter topic (e.g. Heart, Diabetes, Hypertension)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button onClick={handleStart}>
          ✨ Start Quiz
        </button>

      </div>

      {/* LOADING */}
      {loading && <p style={{ marginTop: 20 }}>⏳ Generating Questions...</p>}

      {/* QUESTIONS */}
      {questions.length > 0 && (
        <div className="questions">
          {questions.map((q, i) => (
            <div key={i} className="q-card">
              <h3>{q.question}</h3>

              {q.options.map((opt: string, idx: number) => (
                <button key={idx}>{opt}</button>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* POWERED */}
      <p className="powered">🤖 Powered by AI</p>

      {/* FEATURES */}
      <div className="features">

        <div className="feature-card">
          🎓
          <h3>Smart Questions</h3>
          <p>AI generates high-quality questions based on your topic.</p>
        </div>

        <div className="feature-card">
          ⚡
          <h3>Instant Results</h3>
          <p>Get immediate results and explanations.</p>
        </div>

        <div className="feature-card">
          📊
          <h3>Track Progress</h3>
          <p>Monitor your performance and improve daily.</p>
        </div>

      </div>

      {/* CTA */}
      <div className="cta">
        <h3>Challenge yourself, learn more, and improve daily!</h3>
        <p>Quizzes help you revise and retain concepts faster.</p>
      </div>

    </div>
  );
}