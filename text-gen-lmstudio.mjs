import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:1234/v1",
  apiKey: "lm-studio",
});

const completion = await openai.chat.completions.create({
  model: "DeepSeek-R1-Distill-Llama-8B-GGUF",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
    {
      role: "user",
      content: "Make joke about programmers",
    },
  ],
  temperature: 0.7,
});

console.log(completion.choices[0].message);
