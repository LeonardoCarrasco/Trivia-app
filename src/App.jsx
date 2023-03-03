import { useState } from "react";
import './App.css'
import Home from './Home'
import Game from './Game'

function App() {

  const [isStart, setIsStart] = useState(false)

  return (
    <div className="App bg-main-color text-white text-xl">
      <div className='container mx-auto h-screen'>
        {
          !isStart ? <Home setIsStart={setIsStart}/> : <Game />
        }
      </div>
    </div>
  )
}

export default App
