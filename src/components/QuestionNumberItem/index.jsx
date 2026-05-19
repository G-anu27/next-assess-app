import './index.css'

const QuestionNumberItem = props => {
  const {questionNumber, isActive, onClickQuestionNumber} = props

  const activeClassName = isActive ? 'active-question-btn' : ''

  return (
    <li className="question-number-item">
      <button
        type="button"
        className={`question-number-btn ${activeClassName}`}
        onClick={onClickQuestionNumber}
      >
        {questionNumber}
      </button>
    </li>
  )
}

export default QuestionNumberItem
