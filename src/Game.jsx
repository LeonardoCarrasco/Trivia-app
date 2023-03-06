import { useState, useEffect } from 'react'
import GameData from './component/GameData'
import Button from './component/Button'
import Question from './component/Question'

import GameOver from "./assets/gameover.png";
import ButtonMain from "./component/ButtonMain";
import Logo from "./component/Logo";
import GameDisplay from './GameDisplay'

const URL = 'https://opentdb.com/api.php?amount=6&difficulty=easy'

const Game = ({ setIsStart }) => {

    const [Questions, setQuestions] = useState(null)
    const [next, setNext] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    const getQuestions = async (URL) => {
        const response = await fetch(URL)
        const data = await response.json()
        setQuestions(data.results)
    }

    useEffect(() => {
      getQuestions(URL)
    }, [])

    function arrayAnswers(array) {
      
        let arr = array.incorrect_answers.slice()
              
        arr.splice(Math.floor(Math.random() * arr.length), 0 , array.correct_answer)
      
        return arr
    }

    useEffect(() => {
        if (Questions && next >= Questions.length -1) {
          setGameOver(true)
        }
  
    }, [next])
   
    const handleButtonClick = (res, setNext) => {
      setNext(prev => prev + 1);
      console.log(res)
    }

    return (
        <div className='pt-14 px-6'>
        {
          gameOver ? 
          <GameDisplay > 
            <Logo src={GameOver}/> 
            <ButtonMain text="Restart" setIsStart={setIsStart}/>
          </GameDisplay> : 
              Questions ?
              <>
                <GameData
                  difficulty={Questions[next].difficulty}
                  totalQuestion={Questions.length-1}
                  category={Questions[next].category}
                  next={next}
                />
                <Question question={Questions[next].question}/>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2 max-w-3xl mx-auto mt-20'>
                  {
                    Questions ? arrayAnswers(Questions[next]).map((res, index) => <Button key={index} answer={res} onClick={()=> handleButtonClick(res, setNext)}/>
                    ) : ""
                  }
                </div>             
              </> 
              : "" 
        }
      </div>
    )
}

export default Game