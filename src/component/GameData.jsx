import { useState, useEffect } from "react";

const GameData = ({ difficulty, totalQuestion, category, next, setGameOver }) => {

  const [counter, setCounter] = useState(difficulty === 'easy' ? 20 : difficulty === 'medium' ? 15 : difficulty === 'hard' ? 10 : 0);

  useEffect(() => {
    setCounter(difficulty === 'easy' ? 20 : difficulty === 'medium' ? 15 : difficulty === 'hard' ? 10 : 0);
  }, [next])


  useEffect(() => {

    const interval = setInterval(() => {
     if (!(0 === counter)) {
      setCounter(prevcount => prevcount -1)
     }
     else{
      clearInterval(interval)
      setGameOver(true)
     }
    },1000)

    return () => clearInterval(interval);

  }, [counter])

    return (
      <div className='p-5'>
        <div className='mb-2 text-white/70'>
          <h4 >Difficulty: 
            {difficulty === 'easy' ? <span className="text-base text-green-400 font-semibold"> {difficulty ? difficulty.toUpperCase() : ""}</span> :
            difficulty === 'medium' ? <span className="text-base text-yellow-400 font-semibold"> {difficulty ? difficulty.toUpperCase() : ""}</span> :
            difficulty === 'hard' ? <span className="text-base text-red-400 font-semibold"> {difficulty ? difficulty.toUpperCase() : ""}</span> : ""}
          </h4>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <h4>Question {next +1}<span className="text-gray-500 text-base">/{totalQuestion ? totalQuestion : ""}</span></h4>
          </div>
          <div className='p-1 rounded-full border-white border'>
            <span className='p-1'>{counter}</span>
          </div>
        </div>
        <div className='text-base mt-8'>
          <h5 className='font-semibold'>Category: <span className='font-thin'>{category ? category : ""}</span></h5>
        </div>
      </div>
    )
  }

  export default GameData