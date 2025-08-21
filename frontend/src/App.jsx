import { useState } from 'react'
import navbar from  './components/navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    navbar()
  )
}

export default App
