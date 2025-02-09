import { useState } from 'react'
import './App.css'
import HomPage from './pages/HomPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomPage />
    </>
  )
}

export default App
