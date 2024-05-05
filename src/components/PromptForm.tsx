import Button from "./Button"

type Props = {}

export default function PromptForm({}: Props) {
  return (
    <div className='space-y-4 min-w-[90%] md:min-w-[30%] p-5 ml-3 mr-3'>
      <form className='space-y-2'>
        <label className='font-inter text-color1 dark:text-color1-dark text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor='phrase'>Enter a phrase</label>
        <input id='phrase' 
          className='flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-color1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full'
          placeholder='Type your phrase here'>
        </input>
        <Button text={"Generate"}/>
      </form>
    </div>
  )
}