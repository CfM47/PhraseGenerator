import { useEffect, useState } from "react"
import MessageContainer from "../components/MessageContainer"
import RemoveButton from "../components/RemoveButton"
import { RemovePhrase } from "../utils/HandleFavorite"

type Props = {}

export default function Favorites({}: Props) {
  const [phrases, setPhrases] = useState<string[]>([])

  useEffect(() => {
    localStorage.getItem('phrases') === null? setPhrases([]) : setPhrases(JSON.parse(localStorage.getItem('phrases') as string))    
  }, [])
  
  return (
    <>
      {
        phrases.length === 0? <MessageContainer message="No favorites phrases saved"/> :
        <div className='text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 justify-start w-full'>
          <h2 className='font-inter text-color1 dark:text-color1-dark'>Favorite Phrases :</h2>
          {phrases.map((x, i)=>
              <div className="inline-flex items-end w-full">
                <li key={i} className='font-inter text-sm text-color1 dark:text-color1-dark py-1 flex-1'>{x}</li>
                <RemoveButton remove={() =>RemovePhrase(x, setPhrases)} key={i} item={x}></RemoveButton>
              </div>
            )}
        </div>
      }
    </>
  )
}