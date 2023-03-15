import { useState, useEffect } from 'react'
import set from '../component/setter'

const useGameState = (corrects, setCorrects, Questions, setQuestions, setLoading) => {

    const medium = 'amount=11&difficulty=medium';
    const hard = 'amount=16&difficulty=hard';

    const [next, setNext] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [gameWin, setGameWin] = useState(false)
    const [difficulty, setDifficulty] = useState('easy')

    const nextDifficulty = (difficulty) => {
        setLoading(true)

        if (difficulty === 'easy') {
          set(medium).then((data) => {
            setQuestions(data)
            setCorrects(Array(data.length -1).fill(' '))
            setLoading(false)
          })
        }
        else if(difficulty === 'medium'){
          set(hard).then((data) => {
            setQuestions(data)
            setCorrects(Array(data.length -1).fill(' '))
            setLoading(false)
          })
        }      
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

      return [next, setNext, gameOver, setGameOver, gameWin, difficulty]
}

export default useGameState