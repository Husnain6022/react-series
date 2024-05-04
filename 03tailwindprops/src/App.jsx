import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';


function App() {
  
  return (
    <>
      <h1 className='bg-yellow-400 mb-4'>Tailwind</h1>
      <Card  username='Husnain'/>
      <Card />
    </>
  )
}

export default App
