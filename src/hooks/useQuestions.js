import { useState, useEffect } from "react"
import set from '../component/setter'

const useQuestions = () => {
  
    const [Questions, setQuestions] = useState(null)
    const [corrects, setCorrects] = useState(false)
  
    useEffect(() => {
      
      set().then((data) => {
        setQuestions(data)
        setCorrects(Array(data.length -1).fill(' '))
      })
    }, [])
  
    return [Questions, setQuestions, corrects, setCorrects]
  }

  export default useQuestions