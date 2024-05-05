import OpenAI from "openai"

const key = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true
});

export default async function getRandomPhrase() : Promise<string> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      { role: "user", content: `return a random phrase, no longer than a line`},
    ],
    model: "gpt-3.5-turbo-0125",
  });

  let response = completion.choices[0].message.content;
  return response === null? "Un dia vi una vaca vestida de uniforme" : response
}