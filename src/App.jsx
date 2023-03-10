import { useState } from "react";
import './App.css'
import GameDisplay from './GameDisplay'
import Game from './Game'
import ButtonMain from "./component/ButtonMain";
import Logo from "./component/Logo";

import TriviaApp from "./assets/tittle.png";

function App() {

  const [isStart, setIsStart] = useState(false)

  return (
    <div className="App text-white text-xl">
      <div className='container mx-auto h-screen'>
        {
          !isStart ? 
            <GameDisplay >
                <Logo src={TriviaApp}/>  
                <ButtonMain text="Start" setIsStart={setIsStart}/>
              </GameDisplay> 
              : <Game setIsStart={setIsStart}/>
        }

      </div>
    </div>
  )
}

export default App
