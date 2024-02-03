import { useState } from 'react'

const Greeting = (props) => {
  const [state, setState] = useState(props.name)

  useState(() => {
    setTimeout(()=> {
      setState('Hola Alfonsina')
    }, 3000)
  })
  return (
    <>
      <p >{state}</p>
    </>
  )
}

export default Greeting