import {useNavigate} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Results = () => {
  const navigate = useNavigate()

  const isTimeUp = false

  const score = 8

  const totalQuestions = 10

  const timeTaken = '08:25'

  const onClickReattempt = () => {
    navigate('/assessment')
  }

  const renderSubmitView = () => (
    <div className="results-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/submit-img.png"
        alt="submit"
        className="results-image"
      />

      <h1 className="results-heading">Assessment Submitted Successfully</h1>

      <p className="score-text">Your Score</p>

      <h1 className="score-value">
        {score}/{totalQuestions}
      </h1>

      <p className="time-text">Time Taken: {timeTaken}</p>

      <button
        type="button"
        className="reattempt-btn"
        onClick={onClickReattempt}
      >
        Reattempt
      </button>
    </div>
  )

  const renderTimeUpView = () => (
    <div className="results-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/time-up-img.png"
        alt="time up"
        className="results-image"
      />

      <h1 className="results-heading">Time is up!</h1>

      <p className="score-text">Your Score</p>

      <h1 className="score-value">
        {score}/{totalQuestions}
      </h1>

      <button
        type="button"
        className="reattempt-btn"
        onClick={onClickReattempt}
      >
        Reattempt
      </button>
    </div>
  )

  return (
    <>
      <Header />

      <div className="results-container">
        {isTimeUp ? renderTimeUpView() : renderSubmitView()}
      </div>
    </>
  )
}

export default Results
