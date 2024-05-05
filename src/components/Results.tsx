type Props = {
  prompt: string
  results: string []
}

export default function Container(props: Props) {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 justify-start min-w-[90%] md:min-w-[30%] ml-3 mr-3'>
      <h2 className='font-inter text-color1 dark:text-color1-dark'>Prompt :</h2>
      <p className='font-inter text-sm text-color1 dark:text-color1-dark'>{props.prompt}</p>
      <h2 className='font-inter text-color1 dark:text-color1-dark'>It's variations</h2>
      <ul className="list-disc px-3">
        {props.results.map((x, i)=><li key={i} className='font-inter text-sm text-color1 dark:text-color1-dark py-1'>{x}</li>)}
      </ul>
    </div>
  )
}