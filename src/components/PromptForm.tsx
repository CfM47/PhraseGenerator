type Props = {}

export default function PromptForm({}: Props) {
  return (
    <div className='space-y-4 min-w-[30%] p-5'>
      <form className='space-y-2'>
        <label className='font-inter text-color1 dark:text-color1-dark text-sm font-medium
          leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor='phrase'>Enter a phrase</label>
        <input id='phrase' 
          className='flex h-10 rounded-md border border-input bg-white px-3 py-2 
          text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm
          file:font-medium placeholder:text-muted-color1 focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:cursor-not-allowed disabled:opacity-50 w-full'
          placeholder='Type your phrase here'>
        </input>
        <button className='font-inter text-color3 dark:text-color3-dark bg-color4
        dark:bg-color4-dark inline-flex items-center justify-center whitespace-nowrap rounded-md
        text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-color4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        hover:bg-color4/90 dark:hover:bg-color4-dark/90 h-10 px-4 py-2 w-full'>Generate</button>
      </form>
    </div>
  )
}