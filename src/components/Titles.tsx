type Props = {}

export default function titles({}: Props) {
  return (
  <div className='text-center'>
    <h1 className='font-inter text-3xl text-color1 dark:text-color1-dark font-bold tracking-tighter'>Phrase Generator</h1>
    <p className='font-inter mt-2 text-color2 dark:text-color2-dark'>Generate unique phrases based on your input.</p>
  </div>
  )
}