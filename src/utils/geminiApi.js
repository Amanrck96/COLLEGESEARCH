export const generateMissingDetails = async (collegeName, location, missingField) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey.includes('YOUR_API_KEY')) {
    return `[AI Generated Placeholder] Add your Gemini API Key in .env to auto-generate ${missingField} for ${collegeName}.`;
  }

  const prompt = `You are an expert education counselor data-entry bot. Provide a very brief, professional, and factual 40-word placeholder text for the "${missingField}" section of "${collegeName}" located in ${location || "India"}. Do NOT use markdown or italics. Just output plain text that can be directly displayed on a website.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 80 }
      })
    });
    
    if (!response.ok) throw new Error("API request failed");
    
    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || `Wait, the AI is thinking...`;
  } catch (err) {
    console.error("Gemini API Error:", err);
    return `Failed to connect to AI server.`;
  }
};

export const aiSearchColleges = async (searchQuery) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey.includes('YOUR_API_KEY')) return [];

  const prompt = `You are a strict JSON data generator. The user searched for: "${searchQuery}". Provide an array of exactly 4 relevant educational institutes matching this query. 
  Output ONLY valid JSON, no markdown formatting block, no backticks.
  Array schema:
  [
    {
      "id": "generated_id_number",
      "name": "Institute Name",
      "location": "City Name",
      "state": "State Name",
      "rating": 4.5,
      "type": "Private/Public",
      "fees": "₹ 2,00,000",
      "about": "Brief intro",
      "img": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
    }
  ]`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 600 }
      })
    });
    
    if (!response.ok) return [];
    const data = await response.json();
    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
    
    // Clean markdown if accidentally generated
    text = text.replace(/```json/gi, '').replace(/```/gi, '').trim();
    return JSON.parse(text);
  } catch (err) {
    console.error("Gemini AI Search Error:", err);
    return [];
  }
};
