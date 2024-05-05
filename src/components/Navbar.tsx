import LinkButton from './LinkButton'
import ThemeSwitch from './ThemeSwitch'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='bg-background-color dark:bg-background-color-dark inline-flex items-center justify-end min-w-full px-2 py-1 gap-1 fixed shadow-sm'>
      <h1 className='flex-1 px-3 font-inter text-xl md:text-2xl text-color1 dark:text-color1-dark font-bold tracking-tighter'>Phrase Generator</h1>
      <LinkButton link="/" text='Home'></LinkButton>
      <LinkButton link="/generate" text='Generate'></LinkButton>
      <ThemeSwitch></ThemeSwitch>
    </div>
  )
}