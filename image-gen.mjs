import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const image = await openai.images.generate({
  prompt: "Middle aged jedi with lightsaber and macbook",
});

console.log(image.data[0].url);
