import OpenAI from "openai"

export type Variations = {
  similar_phrases: string[]
}


const key = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true
});

export default async function getVariations(prompt = "Un dia vi una vaca vestida de uniforme") : Promise<Variations> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: `return ten similar phrases to '${prompt}' with key "similar_phrases"`},
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  } as any);

  let response = completion.choices[0].message.content;
  console.log(response);

  let result: Variations =  JSON.parse(response || "")
  return result;
}