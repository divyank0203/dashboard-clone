import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Revenuebox from './components/Revenuebox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Revenuebox/>
    </>
  )
}

export default App
