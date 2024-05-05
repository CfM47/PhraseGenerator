import Titles from "../components/Titles";
import Results from "../components/Results";
import MessageContainer from "../components/MessageContainer";
import getRandomPhrase from "../Services/getRandomPhrase";
import { useState } from "react";
import getVariations from "../Services/getVariations";

type Props = {};

export default function Home({}: Props) {
  const [prompt, setPrompt] = useState("")
  const [phrases, setPhrases] = useState<string[]>([])

  getRandomPhrase()
  .then((result) => {
    setPrompt(result);
    getVariations(prompt).then((result) => setPhrases(result.similar_phrases))
  })

  return (
    <div>
      <Titles></Titles>    
      <MessageContainer message="Just type a prompt and get 10 variations of your phrase. Here is anexample!"></MessageContainer>
      <Results prompt={prompt} results={phrases}></Results>
    </div>
  );
}
