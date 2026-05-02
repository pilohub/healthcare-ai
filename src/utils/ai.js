export const askAI = async (prompt) => {
  const res = await fetch("/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
};