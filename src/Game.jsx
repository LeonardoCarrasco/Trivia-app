
import GameData from './component/GameData'
import Button from './component/Button'
import Question from './component/Question'
import GameEndDisplay from './component/GameEndDisplay'

import logoGameOver from './assets/gameover.png'
import logoGameWin from './assets/gamewin.png'

import useQuestions from './hooks/useQuestions'
import useGameState from './hooks/useGameState'



const Game = ({ setIsStart }) => {

    const [Questions, setQuestions, corrects, setCorrects] = useQuestions()
    const [next, setNext, gameOver, gameWin, difficulty] = useGameState(corrects, setCorrects, Questions, setQuestions)
    console.log(Questions)

    function arrayAnswers(array) {
      
        let arr = array.incorrect_answers.slice()
              
        arr.splice(Math.floor(Math.random() * arr.length), 0 , array.correct_answer)
      
        return arr
    }
   
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