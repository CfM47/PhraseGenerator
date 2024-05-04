import './App.css'
import PromptForm from './components/PromptForm'
import Titles from './components/Titles'
import {useThemeStore} from './stores/theme'

function App() {
  const [theme, toggleTheme] = useThemeStore((state) => [state.theme, state.toggle])
  
  return (
    <div className={theme}>
      <main className='flex min-h-screen flex-col items-center bg-background-color py-12 dark:bg-background-color-dark'>
        <div className='container max-auto max-w-md space-y-6 px-4'>
          <Titles></Titles>
        </div>
        <PromptForm></PromptForm>
        <button onClick={toggleTheme}>CHANGE THEME</button>
      </main>
    </div>
  )
}

export default App
