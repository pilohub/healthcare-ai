import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HeartPulse,
  AlertTriangle,
  Stethoscope,
  ArrowRight,
  Loader2,
  Info,
  PhoneCall,
  ShieldAlert
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import "./dashboard.css";


export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

 const handleSearch = async (e?: React.FormEvent) => {
  e?.preventDefault();
  if (!query.trim()) return;

  setLoading(true);
  setError(null);
  setResponse(null);

  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: query,
      }),
    });

    const data = await res.json();

    

    setResponse(data.text);

  } catch (err) {
    setError(
      err instanceof Error ? err.message : "An unexpected error occurred."
    );
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (response && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [response]);

  const emergencySymptoms = [
    "Chest pain or pressure",
    "Difficulty breathing",
    "Sudden numbness or weakness",
    "Severe bleeding",
    "High fever that won't break",
    "Sudden confusion"
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-teal-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 p-2 rounded-lg">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <h1 className="text-xl font-bold text-teal-900 tracking-tight">HealthCare AI</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <AlertDialog open={open} onOpenChange={setOpen}>

                {/* TRIGGER */}
                <AlertDialogTrigger>
                  <Button
                    variant="ghost"
                    className="text-slate-600 hover:text-teal-700"
                  >
                    <ShieldAlert className="w-4 h-4 mr-2" />
                    Emergency Info
                  </Button>
                </AlertDialogTrigger>

                {/* CONTENT */}
                <AlertDialogContent>
                  <AlertDialogHeader>

                    <AlertDialogTitle className="text-rose-700 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Emergency Protocol
                    </AlertDialogTitle>

                    <AlertDialogDescription className="space-y-4">
                      <p className="font-semibold text-slate-900">
                        If you or someone else is experiencing any of the following, call 911 (or your local emergency number) immediately:
                      </p>

                      <ul className="grid grid-cols-1 gap-2">
                        {emergencySymptoms.map((s, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </AlertDialogDescription>

                  </AlertDialogHeader>

                  <AlertDialogFooter>

                    {/* ✅ IMPORTANT FIX */}
                    <AlertDialogAction
                      onClick={() => setOpen(false)}
                      className="bg-rose-700 hover:bg-rose-800"
                    >
                      Understood
                    </AlertDialogAction>

                  </AlertDialogFooter>
                </AlertDialogContent>

              </AlertDialog>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column: Search & Intro */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <Badge variant="outline" className="text-teal-700 border-teal-200 bg-teal-50 px-3 py-1">
                  AI-Powered Health Education
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Empathetic guidance for your <span className="text-teal-600 italic">well-being.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Enter your symptoms or a medical condition to receive educational information and supportive self-care tips.
                </p>
              </motion.div>

             <form onSubmit={handleSearch} className="relative w-full">

  <Input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="e.g., mild sore throat, common cold..."
    className="
      w-full 
      h-14 
      text-lg 
      rounded-xl 
      border border-teal-100 
      bg-white 
      shadow-sm 
      px-4 pr-24   /* 👉 space for button */
    "
  />

  <Button
    type="submit"
    disabled={loading || !query.trim()}
    className="
      absolute 
      right-2 
      top-1/2 
      -translate-y-1/2   /* 🔥 PERFECT CENTER */
      h-10 
      px-4 
      rounded-lg 
      bg-teal-500 
      hover:bg-teal-600 
      text-white
    "
  >
    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Ask"}
  </Button>

</form>

              <div className="grid grid-cols-2 gap-4" onClick={() => navigate("/student")}>
                <Card className="bg-white/50 border-teal-50">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <Stethoscope className="text-teal-500 w-6 h-6" />
                    <span className="text-sm font-medium text-slate-700">Educational Info</span>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 border-teal-50">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <Info className="text-teal-500 w-6 h-6" />
                    <span className="text-sm font-medium text-slate-700">Self-Care Tips</span>
                  </CardContent>
                </Card>
              </div>

              <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex gap-4" onClick={() => navigate("/emergency")}>
                <div className="bg-rose-100 p-2 rounded-full h-fit">
                  <PhoneCall className="text-rose-700 w-5 h-5" />
                </div>
                <div >
                  <h4 className="font-bold text-rose-900 text-sm">Emergency?</h4>
                  <p className="text-xs text-rose-800 mt-1">
                    <p >If you have chest pain or trouble breathing, call 911 immediately.</p>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!response && !loading && !error && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-teal-100 rounded-3xl bg-white"
                  >
                    <div className="bg-teal-50 p-6 rounded-full mb-6">
                      <Stethoscope className="w-12 h-12 text-teal-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to assist you</h3>
                    <p className="text-slate-500 max-w-xs">
                      Your health information will appear here once you ask a question.
                    </p>
                  </motion.div>
                )}

                {loading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[400px] flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-teal-100 border-t-teal-600 rounded-full animate-spin" />
                      <HeartPulse className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-teal-600 w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-teal-800 font-medium animate-pulse">Consulting medical knowledge...</p>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-rose-50 border border-rose-200 rounded-3xl text-rose-800"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="w-6 h-6" />
                      <h3 className="font-bold text-lg">Something went wrong</h3>
                    </div>
                    <p>{error}</p>
                    <Button
                      variant="outline"
                      className="mt-4 border-rose-200 text-rose-800 hover:bg-rose-100"
                      onClick={() => handleSearch()}
                    >
                      Try Again
                    </Button>
                  </motion.div>
                )}

                {response && (
                  <motion.div
                    key="response"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                    ref={scrollRef}
                  >
                    <Card className="border-teal-100 shadow-xl shadow-teal-900/5 rounded-3xl overflow-hidden">
                      <CardHeader className="bg-teal-50/50 border-b border-teal-50">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl text-teal-900">Health Information</CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-teal-700"
                            onClick={() => {
                              setResponse(null);
                              setQuery("");
                            }}
                          >
                            Clear
                          </Button>
                        </div>
                        <CardDescription>
                          Based on your query: "{query}"
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ScrollArea className="h-[500px] w-full px-6 md:px-8 py-6 md:py-8">
                          <div className="markdown-body pb-8">
                            <ReactMarkdown>{response}</ReactMarkdown>
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>

                    <div className="p-6 bg-teal-900 text-teal-50 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-6">
                      <div className="space-y-1 text-center">
                        <h4 className="font-bold text-lg">Need more help?</h4>
                        <p className="text-teal-200 text-sm">Always consult a doctor for a professional diagnosis.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-teal-100 py-12 mt-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <HeartPulse className="text-teal-600 w-6 h-6" />
                  <span className="text-xl font-bold text-teal-900">HealthCare AI</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Empowering individuals with accessible, empathetic, and accurate health information through advanced AI technology.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <p onClick={() => navigate("/how-it-works")}>How it works</p>
                  <p onClick={() => navigate("/privacy")}>Privacy Policy</p>
                  <p onClick={() => navigate("/terms")}>Terms of Service</p>
                  <p onClick={() => navigate("/support")}>Contact Support</p>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900">Disclaimer</h4>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  HealthCare AI provides educational information only. It is not a substitute for professional medical advice, diagnosis, or treatment. Never ignore professional medical advice because of something you have read here.
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-teal-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
              <p>© 2026 HealthCare AI. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/priyank-vaddoriya-12a122304/" className="hover:text-teal-600">LinkedIn</a>
                <a href="https://github.com/pilohub" className="hover:text-teal-600">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
