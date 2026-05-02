export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // 🔥 DEBUG (important)
    console.log("Gemini response:", data);

    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "API failed" });
  }
}