const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const parseAIResponse = require("../utils/parseAIResponse");

const generatePropertyDescription = async (propertyData) => {
  const prompt = `
You are a professional real estate copywriter specializing in Indian properties.

Write an attractive, professional property description using ONLY the information provided below.

Property Details:
Title: ${propertyData.title}
Property Type: ${propertyData.propertyType}
Location: ${propertyData.location}
Price: ₹${propertyData.price}
Bedrooms: ${propertyData.bedrooms}
Bathrooms: ${propertyData.bathrooms}

STRICT OUTPUT RULES:
- Write between 100 and 150 words.
- Return ONLY the property description.
- Write exactly 2 or 3 natural paragraphs.
- Do NOT add a title or heading.
- Do NOT use Markdown formatting.
- Do NOT use bullet points, numbered lists, asterisks, or emojis.
- Do NOT add labels such as "Overview" or "Property Details".
- Use a professional, elegant, natural tone.
- Mention the property features naturally.
- Avoid repetitive phrases and unnecessary adjectives.
- Do NOT invent amenities, furnishing, nearby landmarks, facilities, or other details.
- The result must be ready to display directly on a real estate website.
`;

  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.4,
  });

  return completion.choices[0].message.content.trim();
};

const extractPropertyFilters = async (query) => {
  const prompt = `
You are a real estate search filter extraction system.

Extract the property filters from the user's search query.

Return ONLY a valid JSON object.
Do not include Markdown, code fences, explanations, or text outside JSON.

Use exactly this schema:

{
  "location": null,
  "propertyType": null,
  "bedrooms": null,
  "bathrooms": null,
  "minPrice": null,
  "maxPrice": null,
  "sort": null
}

Rules:
- location must be a string or null.
- propertyType must be a string or null.
- bedrooms and bathrooms must be numbers or null.
- minPrice and maxPrice must be numbers or null.
- sort must be "lowToHigh", "highToLow", "newest", or null.
- Do not guess missing filters.
- Use null for information that was not specified.

User Query:
${query}
`;

  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    temperature: 0,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const content = completion.choices[0].message.content;

  const cleaned = content
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
};

const propertyAdvisor = async (property, question) => {
  const prompt = `
You are a knowledgeable and professional Indian real estate advisor.

Use the property information below to answer the user's question.

Property Information:

Title: ${property.title}
Description: ${property.description}
Location: ${property.location}
Price: ${property.price}
Property Type: ${property.propertyType}
Bedrooms: ${property.bedrooms}
Bathrooms: ${property.bathrooms}

User Question:
${question}

STRICT RESPONSE FORMATTING RULES:
- Answer the question directly.
- Use clear, simple, professional English.
- Keep the answer concise but useful.
- Use 1 to 3 short paragraphs when appropriate.
- Do NOT use Markdown headings.
- Do NOT use bullet points unless the user specifically asks for a list.
- Do NOT use bold, italics, emojis, or decorative symbols.
- Avoid unnecessary introductory phrases.
- Do not repeat the user's question.
- Do not invent property information.
- If the information is unavailable, clearly say it is not specified.
- Return only the answer, with no extra commentary.
`;

  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    temperature: 0.3,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content.trim();
};

const recommendProperties = async (preferences, properties) => {
  const simplifiedProperties = properties.map((property) => ({
    id: property._id.toString(),
    title: property.title,
    location: property.location,
    price: property.price,
    propertyType: property.propertyType,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
  }));

  const prompt = `
You are an expert Indian real estate recommendation system.

User Preferences:
${JSON.stringify(preferences, null, 2)}

Candidate Properties:
${JSON.stringify(simplifiedProperties, null, 2)}

Task:
Select and rank ONLY the best 3 properties that match the user's preferences.
If fewer than 3 properties are suitable, return only the suitable properties.

Return ONLY valid JSON. Do not use Markdown code fences or any text outside JSON.

Required JSON structure:

{
  "recommendations": [
    {
      "id": "property_id",
      "score": 94,
      "summary": "A short, clear explanation of why this property suits the user.",
      "highlights": [
        "First relevant advantage",
        "Second relevant advantage",
        "Third relevant advantage"
      ]
    }
  ]
}

Strict rules:
- Use only IDs from the candidate properties.
- Never invent a property ID.
- Do not include property titles.
- Do not include property prices.
- Do not include images.
- Score each property from 0 to 100 based on relevance to the user's preferences.
- Keep each summary to 1 or 2 sentences.
- Each highlight must be short and factual.
- Use only information present in the candidate properties and preferences.
- Avoid Markdown formatting inside summary and highlights.
- Sort recommendations from highest relevance to lowest relevance.
- Return an empty recommendations array if no properties are suitable.
`;

  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    temperature: 0.2,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return parseAIResponse(completion.choices[0].message.content);
};

module.exports = {
  generatePropertyDescription,
  propertyAdvisor,
  extractPropertyFilters,
  recommendProperties,
};
