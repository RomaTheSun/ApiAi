import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const stream = await openai.chat.completions.create({
  model: "openai/gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant. Respond in Ukrainian Language",
    },
    {
      role: "user",
      content: "Розкажи щось цікаве про акул",
    },
  ],
  stream: true,
  store: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  if (content) {
    process.stdout.write(content);
  }
}  
//To RUN:
//node --env-file=.env ./text-gen-openrouter.mjs