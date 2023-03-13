import { useState, useEffect } from 'react'
import GameData from './component/GameData'
import Button from './component/Button'
import Question from './component/Question'
import GameEndDisplay from './component/GameEndDisplay'

import logoGameOver from './assets/gameover.png'
import logoGameWin from './assets/gamewin.png'

import set from './component/setter'
import useQuestions from './hooks/useQuestions'

const URL = 'https://opentdb.com/api.php?'

const easy  = 'amount=6&difficulty=easy';
const medium = 'amount=11&difficulty=medium';
const hard = 'amount=16&difficulty=hard';

const Game = ({ setIsStart }) => {

    const [next, setNext] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [gameWin, setGameWin] = useState(false)
    const [difficulty, setDifficulty] = useState('easy')

    const [Questions, setQuestions, corrects, setCorrects] = useQuestions()
    console.log(Questions)


    const nextDifficulty = (difficulty) => {


      if (difficulty === 'easy') {
        set(medium, URL).then((data) => {
          setQuestions(data)
          setCorrects(Array(data.length -1).fill(' '))
        })
      }
      else if(difficulty === 'medium'){
        set(hard, URL).then((data) => {
          setQuestions(data)
          setCorrects(Array(data.length -1).fill(' '))
        })
      }      
    }

    function arrayAnswers(array) {
      
        let arr = array.incorrect_answers.slice()
              
        arr.splice(Math.floor(Math.random() * arr.length), 0 , array.correct_answer)
      
        return arr
    }


    useEffect(() => {

      if(corrects){

        let countFalse = 0;
        corrects.forEach(item => item === false ? countFalse++ : '')

        if(!(countFalse ===3)){
          if(countFalse <= 1 && (Questions && next >= Questions.length -1)){
            setGameWin(true)
          }
        }
        else{
          setGameOver(true)
        }

      }
  
    }, [next])


    useEffect(() => {
      if(gameWin){
        setQuestions(null)
        setNext(0)
        setCorrects(false)
        if(difficulty === 'easy'){
          setDifficulty('medium')
          setGameWin(false)
        }
        else if(difficulty === 'medium'){
          setDifficulty('hard')
          setGameWin(false)
        }

        nextDifficulty(difficulty);
      }
    },[gameWin])
   
    const handleButtonClick = (res, setNext) => {
      const clone = [...corrects]
      Questions[next].correct_answer === res ? clone[next]=true : clone[next]=false;
      setCorrects(clone)
      setNext(prev => prev + 1);
    }

    return (
        <div className='pt-12 px-6 flex flex-col'>
        {
          gameOver ? 
              <GameEndDisplay setIsStart={setIsStart} logoSrc={logoGameOver} isWin={gameWin}/> : 
              gameWin && difficulty === 'hard' ? 
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
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2 max-w-3xl mx-auto my-8 lg:my-20'>
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