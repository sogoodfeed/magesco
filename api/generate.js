// api/generate.js
// Cette fonction tourne côté serveur Vercel — la clé API est sécurisée

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { prompt, mode, maxTokens } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt manquant" });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: maxTokens || 2048,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    if (data.content && data.content[0]) {
      return res.status(200).json({ result: data.content[0].text });
    }
    return res.status(500).json({ error: data.error?.message || "Erreur API" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
