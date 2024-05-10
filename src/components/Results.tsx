import AddToFavorites from "./AddButton"
import { AddPhrase, RemovePhrase } from "../utils/HandleFavorite"

type Props = {
  prompt: string
  results: string [] | undefined
  add: boolean
}

export default function Container(props: Props) {
  return (
    <>
      {
        props.results === undefined || props.results.length === 0? <></> :
        <div className='text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 justify-start'>
          <h2 className='font-inter text-color1 dark:text-color1-dark'>Favorite Phrases :</h2>
          <ul className="list-disc px-3">
            {props.results.map((x, i)=>
              <div className="inline-flex items-end w-full">
                <li key={i} className='font-inter text-sm text-color1 dark:text-color1-dark py-1 flex-1'>{x}</li>
                <AddToFavorites add={AddPhrase} remove={RemovePhrase} key={i} item={x}></AddToFavorites>
              </div>
            )}
          </ul>
        </div>
      }
    </>
  )
}