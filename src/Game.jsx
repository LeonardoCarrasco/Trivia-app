import { useState, useEffect } from 'react'
import GameData from './component/GameData'
import Button from './component/Button'
import Question from './component/Question'
import GameEndDisplay from './component/GameEndDisplay'

import logoGameOver from './assets/gameover.png'
import logoGameWin from './assets/gamewin.png'

const URL = 'https://opentdb.com/api.php?amount=6&difficulty=easy'

const Game = ({ setIsStart }) => {

    const [Questions, setQuestions] = useState(null)
    const [next, setNext] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [corrects, setCorrects] = useState(false)
    const [gameWin, setGameWin] = useState(false)

    const getQuestions = async (URL) => {
        const response = await fetch(URL)
        const data = await response.json()
        setQuestions(data.results)
        return data.results
    }

    // console.log(Questions)

    useEffect(() => {

        const set = async () =>{
          const questions = await getQuestions(URL)
          return questions
        }
        
        set().then((questions) => setCorrects(Array(questions.length -1).fill(' ')))
    }, [])

    function arrayAnswers(array) {
      
        let arr = array.incorrect_answers.slice()
              
        arr.splice(Math.floor(Math.random() * arr.length), 0 , array.correct_answer)
      
        return arr
    }


    useEffect(() => {

      if(corrects){
        // console.log("corrects : ",corrects)
        let countFalse = 0;
        corrects.forEach(item => item === false ? countFalse++ : '')

        if(!(countFalse ===2)){
          if (countFalse >=2 && (Questions && next >= Questions.length -1)) {
            setGameOver(true)
          }
          else if(countFalse <= 1 && (Questions && next >= Questions.length -1)){
            setGameWin(true)
          }
        }
        else{
          setGameOver(true)
        }

      }
  
    }, [next])
   
    const handleButtonClick = (res, setNext) => {
      const clone = [...corrects]
      console.log("respueta elegida: ",res)
      console.log("respueta correcta: ",Questions[next].correct_answer)
      Questions[next].correct_answer === res ? clone[next]=true : clone[next]=false;
      setCorrects(clone)
      setNext(prev => prev + 1);
    }

    return (
        <div className='pt-14 px-6 h-screen'>
        {
          gameOver ? 
              <GameEndDisplay setIsStart={setIsStart} logoSrc={logoGameOver} isWin={gameWin}/> : 
              gameWin ? 
                <GameEndDisplay setIsStart={setIsStart} logoSrc={logoGameWin} isWin={gameWin}/> : 
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