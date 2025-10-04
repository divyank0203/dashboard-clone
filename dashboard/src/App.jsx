import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Revenuebox from './components/Revenuebox'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div className='pt-16 pl-52'>
    <p className='m-3 tex-lg font-bold'>Overview</p>
      <Revenuebox/>
    </div>

    </>
  )
}

export default App
