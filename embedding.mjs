import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const embedding = await openai.embeddings.create({
  model: "text-embedding-3-large",
  input: "Джедай Йода",
});

console.log(embedding);
console.log(embedding.data[0].embedding);
