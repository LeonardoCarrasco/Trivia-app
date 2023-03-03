import { useState, useEffect } from 'react'
import GameData from './component/GameData'
import Button from './component/Button'
import Question from './component/Question'

const URL = 'https://opentdb.com/api.php?amount=5&difficulty=easy'

const Game = () => {
    const [Questions, setQuestions] = useState(null)

    useEffect(() => {
      fetch(URL)
       .then(res => res.json())
       .then(data => setQuestions(data.results))
    }, [])

    function arrayAnswers(array) {
      
        let arr = array.incorrect_answers.slice()
              
        arr.splice(Math.floor(Math.random() * arr.length), 0 , array.correct_answer)
      
        return arr
    }

    return (
        <div className='pt-14'>
        {
          Questions ?
          <><GameData
          difficulty={Questions[0].difficulty}
          totalQuestion={Questions.length}
          category={Questions[0].category}
          />
          <Question question={Questions[0].question}/></> : "" 
        }
        <div className='grid gap-5 grid-cols-2 grid-rows-2 max-w-3xl mx-auto mt-20'>
          {
            Questions ? arrayAnswers(Questions[0]).map((res, index) => <Button key={index} answer={res} />
            ) : ""
          }
        </div>
      </div>
    )
}

export default Game