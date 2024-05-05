import React from 'react'
import { Link } from 'react-router-dom'


type Props = {
  link: string
  text: string
}

export default function LinkButton(props: Props) {
  return (
    <Link to={props.link} className='font-inter text-color3 dark:text-color3-dark bg-color4 dark:bg-color4-dark text-center rounded-2xl ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color4 focus-visible:ring-offset-2 hover:bg-color4/90 dark:hover:bg-color4-dark/90 px-4 py-1 '>{props.text}</Link>
  )
}