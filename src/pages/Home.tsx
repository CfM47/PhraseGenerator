import Results from "../components/Results";
import MessageContainer from "../components/MessageContainer";
import getRandomVariations from "../Services/getRandomPhrase";
import { useEffect, useState } from "react";
import LinkButtonLg from "../components/LinkButtonLg";

type Props = {};

export default function Home({}: Props) {
  const [prompt, setPrompt] = useState("")
  const [phrases, setPhrases] = useState<string[]>([])

  useEffect(() => {
    getRandomVariations()
    .then((result) => {
      setPrompt(result.prompt)
      setPhrases(result.similar_phrases)
    })
  }, [])

  return (
    <div className="flex flex-col gap-2">  
      <MessageContainer message="Just type a prompt and get 10 variations of your phrase."></MessageContainer>
      <div className="text-left mt-2">
        <LinkButtonLg link="/generate" text="Generate Now"></LinkButtonLg>
        {phrases.length === 0 ? <></> : <h2 className='font-inter text-color1 dark:text-color1-dark m-2'>Here's an example :</h2>}
        <Results prompt={prompt} results={phrases} add={false}></Results>
      </div>
    </div>
  );
}
