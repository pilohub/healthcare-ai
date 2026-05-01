import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as pdfjsLib from "pdfjs-dist";
import "./anatomy.css";

// ✅ FIX: worker add
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const genAI = new GoogleGenerativeAI("AIzaSyDyaQ_GPmT8VPJ_jBWanf1DvcZHBdyK3f0");

export default function Anatomy() {
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState("");
  const [subject, setSubject] = useState("anatomy");
  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState<any[]>([]);
  const [chat, setChat] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const pdfs: any = {
    anatomy: "/pdfs/anatomy.pdf",
    physiology: "/pdfs/physiology.pdf",
    pathology: "/pdfs/pathology.pdf",
  };

  // ✅ AI SUMMARY
  const getAISummary = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(
        `Explain ${subject} in simple bullet points for medical students`
      );

      setSummary(result.response.text());
    } catch {
      setSummary("Try again after few seconds ⏳");
    }

    setTimeout(() => setLoading(false), 30000);
  };

  // ✅ AI QUIZ
  const generateQuiz = async () => {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(
      `Create 3 MCQ questions on ${subject} in JSON format:
      [{question:"", options:["","","",""], answer:""}]`
    );

    const text = result.response.text();

    try {
      const clean = text.replace(/```json|```/g, "");
      setQuiz(JSON.parse(clean));
    } catch {
      console.log("Quiz parse error");
    }
  };

  // ✅ PDF TEXT EXTRACT
  const extractTextFromPDF = async () => {
    const loadingTask = pdfjsLib.getDocument(pdfs[subject]);
    const pdf = await loadingTask.promise;

    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();

      text += content.items.map((item: any) => item.str).join(" ");
    }

    return text;
  };

  // ✅ PDF SUMMARY
  const handlePDFSummary = async () => {
    const text = await extractTextFromPDF();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flasht",
    });

    const result = await model.generateContent(
      `Summarize this medical content:\n${text.substring(0, 2000)}`
    );

    setSummary(result.response.text());
  };

  // ✅ CHATBOT
  const sendMessage = async () => {
    if (!input) return;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(input);
    const reply = result.response.text();

    setChat([...chat, { user: input, ai: reply }]);
    setInput("");
  };

  return (
    <div className="anatomy-page">

      <h1>📚 AI Medical Study</h1>

      {/* TABS */}
      <div className="tabs">
        <button onClick={() => setSubject("anatomy")}>Anatomy</button>
        <button onClick={() => setSubject("physiology")}>Physiology</button>
        <button onClick={() => setSubject("pathology")}>Pathology</button>
      </div>

      <div className="split-container">

        {/* PDF */}
        <div className="pdf-box">
          <object data={pdfs[subject]} width="100%" height="100%" />
        </div>

        {/* RIGHT SIDE */}
        <div className="notes-box">

          {/* RIGHT: NOTES */}
          <div className="notes-box">

            <h2>📝 Notes</h2>

            <textarea
              placeholder="Write your notes..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <button onClick={() => setSaved(note)}>
              💾 Save Notes
            </button>

            <div className="saved">
              <h3>Saved:</h3>
              <p>{saved}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}