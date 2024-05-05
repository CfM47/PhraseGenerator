
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useThemeStore } from '../stores/theme'

type Props = {}

export default function Root({}: Props) {
  const [theme] = useThemeStore((state) => [state.theme, state.toggle])
  
  return (
    <div className={theme}>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center bg-background-color py-12 dark:bg-background-color-dark">
        <Outlet></Outlet>
      </main>
    </div>
  )
}