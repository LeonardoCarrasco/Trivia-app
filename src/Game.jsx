import { useState, useEffect } from 'react'
import GameData from './component/GameData'
import Button from './component/Button'
import Question from './component/Question'
import GameEndDisplay from './component/GameEndDisplay'

import logoGameOver from './assets/gameover.png'
import logoGameWin from './assets/gamewin.png'

const URL = 'https://opentdb.com/api.php?'

const easy  = 'amount=6&difficulty=easy';
const medium = 'amount=11&difficulty=medium';
const hard = 'amount=16&difficulty=hard';

const Game = ({ setIsStart }) => {

    const [Questions, setQuestions] = useState(null)
    const [next, setNext] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [corrects, setCorrects] = useState(false)
    const [gameWin, setGameWin] = useState(false)
    const [difficulty, setDifficulty] = useState('easy')

    const getQuestions = async (URL) => {

      try{
        const response = await fetch(URL)
        const data = await response.json()
        setQuestions(data.results)
        return data.results
      }
      catch(error){
        console.log(error)
      }

    }

    const nextDifficulty = (difficulty) => {

      const set = async (diff) =>{
        const questions = await getQuestions(URL + diff)
        return questions
      }

      if (difficulty === 'easy') {
        set(medium).then((questions) => setCorrects(Array(questions.length -1).fill(' ')))
      }
      else if(difficulty === 'medium'){
        set(hard).then((questions) => setCorrects(Array(questions.length -1).fill(' ')))
      }      
    }

    useEffect(() => {

        const set = async () =>{
          const questions = await getQuestions(URL + easy)
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

        let countFalse = 0;
        corrects.forEach(item => item === false ? countFalse++ : '')

        if(!(countFalse ===2)){
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