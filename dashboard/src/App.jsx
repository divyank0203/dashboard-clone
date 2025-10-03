import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Revenuebox from './components/Revenuebox'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <p className='m-3 tex-lg font-bold'>Overview</p>
      <Revenuebox/>
    </>
  )
}

export default App
