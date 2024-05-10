import { IconType } from "react-icons/lib"
import { Link } from "react-router-dom"
import { useThemeStore } from "../stores/theme"

type Props = {
  link: string
  icon: IconType
}

export default function NavbarButton(props: Props) {
  const [theme] = useThemeStore((state) => [state.theme])

  return (
    <Link to={props.link} className="bg-color4 dark:bg-color4-dark text-center rounded-2xl ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color4 focus-visible:ring-offset-2 hover:bg-color4/90 dark:hover:bg-color4-dark/90 p-1">
      {theme== "dark"? <props.icon color="#111827"/> : <props.icon color="#f9fafb"/>}
    </Link>
  )
}