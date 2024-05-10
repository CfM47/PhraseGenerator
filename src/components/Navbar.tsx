import ButtonSection from './ButtonSection';
import LinkSection from './LinkSection';
import ThemeSwitch from './ThemeSwitch'
import { useMediaQuery } from 'react-responsive';

type Props = {}

export default function Navbar({}: Props) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  return (
    <div className='bg-background-color dark:bg-background-color-dark inline-flex items-center justify-end min-w-full px-2 py-1 gap-1 fixed shadow-sm'>
      <h1 className='flex-1 px-3 font-inter text-xl md:text-2xl text-color1 dark:text-color1-dark font-bold tracking-tighter'>Phrase Generator</h1>
      {
        isDesktop? <LinkSection/> : <ButtonSection/>
      }
      <ThemeSwitch></ThemeSwitch>
    </div>
  )
}