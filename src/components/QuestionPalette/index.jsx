import QuestionNumberItem from '../QuestionNumberItem'

import './index.css'

const QuestionPalette = props => {
  const {
    questionsData,
    activeQuestion,
    onClickQuestionNumber,
    answeredQuestionsCount,
    unansweredQuestionsCount,
    timeLeft,
  } = props

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

  return (
    <div className="palette-container">
      <div className="timer-container">
        <p className="timer-label">Time Left</p>

        <h1 className="timer-value">{formattedTime}</h1>
      </div>

      <div className="count-container">
        <div className="count-item">
          <div className="answered-badge">{answeredQuestionsCount}</div>

          <p className="count-text">Answered Questions</p>
        </div>

        <div className="count-item">
          <div className="unanswered-badge">{unansweredQuestionsCount}</div>

          <p className="count-text">Unanswered Questions</p>
        </div>
      </div>

      <hr className="palette-separator" />

      <h1 className="questions-heading">Questions ({questionsData.length})</h1>

      <ul className="questions-list">
        {questionsData.map((eachQuestion, index) => (
          <QuestionNumberItem
            key={eachQuestion.id}
            questionNumber={index + 1}
            isActive={activeQuestion === index}
            onClickQuestionNumber={() => onClickQuestionNumber(index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default QuestionPalette
