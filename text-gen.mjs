import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant. Respond in Ukrainian Language",
    },
    {
      role: "user",
      content: "Розкажи жарт про програмістів",
    },
  ],
  store: true,
});

console.log(completion.choices[0].message);
