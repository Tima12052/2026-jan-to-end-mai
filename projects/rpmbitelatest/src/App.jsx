import { useState } from 'react'
import LikeButtonF from './LikeButtonF'
import LikeButton from './LikeButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LikeButton/> */}
      <LikeButtonF/>
    </>
  )
}

export default App
