import Navbar from "../components/Navbar"
import { useThemeStore } from "../stores/theme"

type Props = {
  errorMessage? : string
}

export default function ErrorPage(props: Props) {
  const [theme] = useThemeStore((state) => [state.theme, state.toggle])
  return (
    <div className={theme}>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center bg-background-color py-12 dark:bg-background-color-dark">
        <div className='container max-auto max-w-md space-y-6 py-4 text-center'>
          <h1 className='font-inter text-3xl text-color1 dark:text-color1-dark font-bold tracking-tighter'>Oops!</h1>
          <p className='font-inter mt-2 text-color2 dark:text-color2-dark'>An unexpected error ocurred</p>
          <p className="font-inter mt-2 text-color2 dark:text-color2-dark">{props.errorMessage}</p>
        </div>
      </main>
    </div>
  )
}