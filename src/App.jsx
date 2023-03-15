import { useState } from "react";
import './App.css'
import GameDisplay from './GameDisplay'
import Game from './Game'
import ButtonMain from "./component/ButtonMain";
import Logo from "./component/Logo";
import Modal from "./component/Modal";

import {FaQuestionCircle} from 'react-icons/fa'

import TriviaApp from "./assets/tittle.png";

function App() {

  const [isStart, setIsStart] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="App text-white text-xl">
      <div className='container mx-auto h-screen relative'>
        {
          !isStart ? 
            <GameDisplay >
              <Logo src={TriviaApp}/>  
              <ButtonMain text="Start" setIsStart={setIsStart}/>
              <button className="mx-auto text-3xl" onClick={handleShow}><FaQuestionCircle/></button>
              {showModal ? <Modal handleShow={handleShow}/> : ''}
            </GameDisplay> 
              : <Game setIsStart={setIsStart}/>
        }

      </div>
    </div>
  )
}

export default App
