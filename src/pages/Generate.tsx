import { useState } from "react";
import PromptForm from "../components/PromptForm";
import Results from "../components/Results";
import MessageContainer from "../components/MessageContainer";


type Props = {};

export default function Generate({}: Props) {
  const [phrases, setphrases] = useState<string[]>([])
  const [prompt, setPrompt] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div>
      <PromptForm setPhrases={setphrases} setPrompt={setPrompt} setMessage={setMessage}></PromptForm>
      <MessageContainer message={message}></MessageContainer>
      <Results prompt={prompt} results={phrases} allowAdd={true}></Results>
    </div>
  );
}
