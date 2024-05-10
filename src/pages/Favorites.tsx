import MessageContainer from "../components/MessageContainer"
import { useFavoritesStore } from "../stores/favoritePhrases"

type Props = {}

export default function Favorites({}: Props) {
  const [favorites] = useFavoritesStore((state) => [state.favorites])

  return (
    <>
      {
        favorites.length === 0? <MessageContainer message="No favorites phrases saved"/> :
        <div className='text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 justify-start'>
          <h2 className='font-inter text-color1 dark:text-color1-dark'>Favorite Phrases :</h2>
          <ul className="list-disc px-3">
            {favorites.map((x, i)=><li key={i} className='font-inter text-sm text-color1 dark:text-color1-dark py-1'>{x}</li>)}
          </ul>
        </div>
      }
    </>
  )
}