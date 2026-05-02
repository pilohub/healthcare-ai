export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt missing" });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("Gemini RAW:", JSON.stringify(data));

    // 🔥 IMPORTANT: direct clean response return
    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text)
        .join(" ") || null;

    if (!text) {
      return res.status(500).json({ error: "Empty AI response", raw: data });
    }

    res.status(200).json({ text });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: "API failed" });
  }
}