import PromptForm from "../components/PromptForm"
import Titles from "../components/Titles"

type Props = {}

export default function Generate({}: Props) {
  return (
    <div>
      <Titles></Titles>
      <PromptForm></PromptForm>
    </div>
  )
}