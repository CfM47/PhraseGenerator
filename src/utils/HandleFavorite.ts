export function AddPhrase(phrase: string, setPhrases?: React.Dispatch<React.SetStateAction<string[]>>): void{
  if(localStorage.getItem('phrases') === null){
    localStorage.setItem('phrases', JSON.stringify([phrase]))
  }
  const phrases = JSON.parse(localStorage.getItem('phrases') as string)
  if(phrases.includes(phrase)){
    return
  }
  phrases.push(phrase)
  localStorage.setItem('phrases', JSON.stringify(phrases))

  if(setPhrases)
    setPhrases(phrases)

  console.log(phrases)
}

export function RemovePhrase(phrase: string, setPhrases?: React.Dispatch<React.SetStateAction<string[]>>): void{
  if(localStorage.getItem('phrases') === null){
    return
  }
  const phrases = JSON.parse(localStorage.getItem('phrases') as string)
  if(!phrases.includes(phrase)){
    return
  }
  const index = phrases.indexOf(phrase)
  phrases.splice(index, 1)
  localStorage.setItem('phrases', JSON.stringify(phrases))

  if(setPhrases)
    setPhrases(phrases)

  console.log(phrases)
}