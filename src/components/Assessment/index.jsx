import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

import Header from '../Header'
import Question from '../Question'
import QuestionPalette from '../QuestionPalette'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Assessment = () => {
  const [questionsData, setQuestionsData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const [activeQuestion, setActiveQuestion] = useState(0)

  const [selectedAnswers, setSelectedAnswers] = useState({})

  const [timeLeft, setTimeLeft] = useState(600)

  const navigate = useNavigate()

  useEffect(() => {
    getQuestions()
  }, [])

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 1) {
          clearInterval(timerId)
          navigate('/results')
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timerId)
  }, [navigate])

  const getQuestions = async () => {
    setApiStatus(apiStatusConstants.loading)

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/assess/questions'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      setQuestionsData(data.questions)

      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  const onSelectAnswer = optionId => {
    const currentQuestionId = questionsData[activeQuestion].id

    setSelectedAnswers(prevState => ({
      ...prevState,
      [currentQuestionId]: optionId,
    }))
  }

  const onClickNextQuestion = () => {
    setActiveQuestion(prev => prev + 1)
  }

  const onClickQuestionNumber = index => {
    setActiveQuestion(index)
  }

  const onSubmitAssessment = () => {
    navigate('/results')
  }

  const answeredQuestionsCount = Object.keys(selectedAnswers).length

  const unansweredQuestionsCount = questionsData.length - answeredQuestionsCount

  const renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <div className="loader" />
    </div>
  )

  const renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-assess-failure-img.png"
        alt="failure view"
        className="failure-image"
      />

      <h1 className="failure-heading">Something went wrong</h1>

      <button type="button" className="retry-btn" onClick={getQuestions}>
        Retry
      </button>
    </div>
  )

  const renderSuccessView = () => (
    <div className="assessment-layout">
      <div className="question-section">
        <Question
          questionData={questionsData[activeQuestion]}
          selectedAnswers={selectedAnswers}
          onSelectAnswer={onSelectAnswer}
        />

        <div className="buttons-container">
          {activeQuestion !== questionsData.length - 1 && (
            <button
              type="button"
              className="next-btn"
              onClick={onClickNextQuestion}
            >
              Next Question
            </button>
          )}

          <button
            type="button"
            className="submit-btn"
            onClick={onSubmitAssessment}
          >
            Submit Assessment
          </button>
        </div>
      </div>

      <QuestionPalette
        questionsData={questionsData}
        activeQuestion={activeQuestion}
        onClickQuestionNumber={onClickQuestionNumber}
        answeredQuestionsCount={answeredQuestionsCount}
        unansweredQuestionsCount={unansweredQuestionsCount}
        timeLeft={timeLeft}
      />
    </div>
  )

  const renderAssessmentView = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return renderLoaderView()

      case apiStatusConstants.success:
        return renderSuccessView()

      case apiStatusConstants.failure:
        return renderFailureView()

      default:
        return null
    }
  }

  return (
    <>
      <Header />

      <div className="assessment-container">{renderAssessmentView()}</div>
    </>
  )
}

export default Assessment
