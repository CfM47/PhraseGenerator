import OpenAI from "openai"
import { Variations } from "../Types/Variations"

const key = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true
});

export default async function getRandomVariations() : Promise<Variations> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON..",
      },
      { role: "user", content: `return a random short phrase with key "prompt", and a list of ten variations of it with key "similar_phrases"`},
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  } as any);

  let response = completion.choices[0].message.content;
  console.log(response);

  let result: Variations =  JSON.parse(response || "")
  return result;
}