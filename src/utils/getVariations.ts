import OpenAI from "openai"

export type Variations = {
  similar_phrases: string[]
}

require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY
});

export default async function getVariations(prompt: string) : Promise<Variations> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: `return ten similar phrases to '${prompt}'`},
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  } as any);

  let response = completion.choices[0].message.content;
  console.log(response);

  let result: Variations =  JSON.parse(response || "")
  return result;
}