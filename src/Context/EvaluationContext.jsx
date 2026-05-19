import React, {useState} from 'react'

const EvaluationContext = React.createContext({
  score: 0,
  setScore: () => {},

  timeTakenInSeconds: 0,
  setTimeTakenInSeconds: () => {},

  answers: {},
  setAnswers: () => {},

  isTimeUp: false,
  setIsTimeUp: () => {},

  resetAssessment: () => {},
})

export const EvaluationProvider = ({children}) => {
  const [score, setScore] = useState(0)

  const [timeTakenInSeconds, setTimeTakenInSeconds] = useState(0)

  const [answers, setAnswers] = useState({})

  const [isTimeUp, setIsTimeUp] = useState(false)

  const resetAssessment = () => {
    setScore(0)
    setTimeTakenInSeconds(0)
    setAnswers({})
    setIsTimeUp(false)
  }

  return (
    <EvaluationContext.Provider
      value={{
        score,
        setScore,

        timeTakenInSeconds,
        setTimeTakenInSeconds,

        answers,
        setAnswers,

        isTimeUp,
        setIsTimeUp,

        resetAssessment,
      }}
    >
      {children}
    </EvaluationContext.Provider>
  )
}

export default EvaluationContext
