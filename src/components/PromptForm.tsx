import Button from "./Button"
import getVariations from "../Services/getVariations"
import { useState } from "react"
import {useForm} from "react-hook-form"

type Props = {
  setPhrases : React.Dispatch<React.SetStateAction<string[]>>
  setPrompt : React.Dispatch<React.SetStateAction<string>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

export default function PromptForm(props: Props) {
  const [value, setvalue] = useState("")
  const [fetching, setFetching] = useState(false)
  const {handleSubmit, register, formState: {errors}} = useForm()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    try{
      setFetching(true)
      getVariations(value).then((result) => {
        if(result == undefined)
        {
          props.setPrompt("")
          props.setPhrases([])
          props.setMessage("An unexpected error ocurred. Try generating a new request in a few seconds")
        }
        props.setPrompt(value)
        props.setPhrases(result.similar_phrases)
        props.setMessage("")
      }).finally(()=> setFetching(false))
    }catch(e){
      console.error(e)
      setFetching(false)
      props.setPrompt("")
      props.setPhrases([])
      props.setMessage("An unexpected error ocurred. Try generating a new request in a few seconds")
    }
  }

  return (
    <div className='space-y-4'>
      <form className='space-y-2' onSubmit={onSubmit}>
        <label className='font-inter text-color1 dark:text-color1-dark text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor='phrase'>Enter a phrase</label>
        <input id='phrase'
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          className='flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-color1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full'
          placeholder='Type your phrase here'>
        </input>
        <Button text="Generate" fetching={fetching}/>
      </form>
    </div>
  )
}