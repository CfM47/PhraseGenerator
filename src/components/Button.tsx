type Props = {
  text: string
  fetching?: boolean
  onClick?: () => void
}

export default function Button(props: Props) {
  return (
    <button disabled={props.fetching} onClick={props.onClick} className='font-inter text-color3 dark:text-color3-dark bg-color4 dark:bg-color4-dark inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-color4/90 dark:hover:bg-color4-dark/90 h-10 px-4 py-2 w-full'>{props.fetching? "Fetching response...":props.text}</button>
  )
}