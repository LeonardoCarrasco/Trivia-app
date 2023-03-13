import { useState, useEffect } from "react"
import set from '../component/setter'

const useQuestions = (setLoading) => {
  
    const [Questions, setQuestions] = useState(null)
    const [corrects, setCorrects] = useState(false)
    
    useEffect(() => {
      setLoading(true)
      set().then((data) => {
        setQuestions(data)
        setCorrects(Array(data.length -1).fill(' '))
        setLoading(false)
      })
    }, [])
  
    return [Questions, setQuestions, corrects, setCorrects]
  }

  export default useQuestions