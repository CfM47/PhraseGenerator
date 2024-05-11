import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

type Props = {
  item: any
  isFavorite: boolean
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>
  add: (item : any) => void
  remove: (item : any) => void
}

export default function AddButton(props: Props) {
  const handleClick = () => {
    if (props.isFavorite) 
      props.remove(props.item)
    else {
      props.add(props.item)
      console.log("se agrego el item")
      console.log(localStorage.getItem('phrases'))
    }
    
    props.setIsFavorite(!props.isFavorite)
  }

  return (
    <button onClick={handleClick} className='font-inter text-color3 dark:text-color3-dark bg-color4 dark:bg-color4-dark inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-color4/90 dark:hover:bg-color4-dark/90 px-1 py-1'>{props.isFavorite? <MdFavorite/> : <MdFavoriteBorder/>}</button>
  )
}