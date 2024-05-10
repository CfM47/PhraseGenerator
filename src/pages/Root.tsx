
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useThemeStore } from '../stores/theme'
import Titles from '../components/Titles'

type Props = {}

export default function Root({}: Props) {
  const [theme] = useThemeStore((state) => [state.theme, state.toggle])
  
  return (
    <div className={theme}>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center text-center bg-background-color py-12 dark:bg-background-color-dark">
        <div className='max-w-[90%] md:max-w-[35%] flex flex-col items-center'>
          <Titles></Titles>
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  )
}