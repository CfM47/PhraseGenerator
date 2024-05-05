import { FaRegMoon } from "react-icons/fa6";
import { LuSunMedium } from "react-icons/lu";
import { useThemeStore } from "../stores/theme";

type Props = {}

export default function ThemeSwitch({}: Props) {
  const [theme, toggleTheme] = useThemeStore((state) => [state.theme, state.toggle])
  
  return (
    <button className="bg-color4 dark:bg-color4-dark text-center rounded-2xl ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color4 focus-visible:ring-offset-2 hover:bg-color4/90 dark:hover:bg-color4-dark/90 px-2 py-1" onClick={toggleTheme}>
      {theme== "dark"? <FaRegMoon color="#111827"/> : <LuSunMedium color="#f9fafb"/>}
    </button>
  )
}