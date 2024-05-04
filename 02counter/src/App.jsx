import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  
  const addvalue = () => {
    console.log('value counter', counter)
    counter = counter + 1
    setCounter(counter)
  }

const removeValue = () => {
  setCounter(counter - 1)
}

  return (
    <>
    <p>Here is React Project..</p>
    
    <h2>Counter value {counter}</h2>

    <button onClick={addvalue}>Add value {counter}</button>

    <br /><br />

    <button onClick={removeValue}>Remove value {counter}</button>
    
    </>
  )
}

export default App
