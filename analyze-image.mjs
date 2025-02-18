import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What's in this image?" },
        {
          type: "image_url",
          image_url: {
            url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-muuKmNRk3K5ju2g1PVAF5dgw/user-qMf9IvEHezedGf128lLUl5mZ/img-fgEHT80XxE47EMADo9uDUAdu.png?st=2025-02-13T15%3A11%3A07Z&se=2025-02-13T17%3A11%3A07Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-02-13T03%3A19%3A57Z&ske=2025-02-14T03%3A19%3A57Z&sks=b&skv=2024-08-04&sig=WA%2BTU8%2BbO9NfIdDUZHhweHAxhZlR/8X%2BZ53Nb%2BNUIUY%3D",
          },
        },
      ],
    },
  ],
  store: true,
});

console.log(completion.choices[0].message);
