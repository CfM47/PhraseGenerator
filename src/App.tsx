import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {useThemeStore} from './stores/theme'

function App() {
  const [theme] = useThemeStore((state) => [state.theme, state.toggle])
  
  return (
    <div className={theme}>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
