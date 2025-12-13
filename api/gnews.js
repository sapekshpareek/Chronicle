export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const apiKey = process.env.GNEWS_API || process.env.VITE_GNEWS_API;
  if (!apiKey) {
    res.status(500).json({ error: "Missing GNEWS_API env" });
    return;
  }

  const { q, category = "general", lang = "en", country = "in", max = "10" } = req.query;

  const baseUrl = q
    ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}`
    : `https://gnews.io/api/v4/top-headlines?category=${encodeURIComponent(category)}`;

  const url = `${baseUrl}&lang=${encodeURIComponent(lang)}&country=${encodeURIComponent(country)}&max=${encodeURIComponent(max)}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type") || "application/json";
    const isJson = contentType.includes("application/json");

    if (!response.ok) {
      const errorBody = isJson ? await response.json() : await response.text();
      res.status(response.status).json({ error: "Upstream error", details: errorBody });
      return;
    }

    const data = isJson ? await response.json() : await response.text();
    // Pass-through JSON; if not JSON, wrap as text
    if (isJson) {
      res.status(200).json(data);
    } else {
      res.status(200).send(data);
    }
  } catch (err) {
    res.status(500).json({ error: "Proxy fetch failed", message: err.message });
  }
}
