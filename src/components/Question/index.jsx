import ButtonOptionItem from '../ButtonOptionItem'
import ImageOptionItem from '../ImageOptionItem'
import Select from '../Select'

import './index.css'

const Question = props => {
  const {questionData, selectedAnswers, onSelectAnswer} = props

  const {id, question_text, options, options_type} = questionData

  const selectedOptionId = selectedAnswers[id]

  const renderDefaultOptions = () => (
    <ul className="options-list">
      {options.map(eachOption => (
        <ButtonOptionItem
          key={eachOption.id}
          optionData={eachOption}
          isSelected={selectedOptionId === eachOption.id}
          onSelectAnswer={onSelectAnswer}
        />
      ))}
    </ul>
  )

  const renderImageOptions = () => (
    <ul className="image-options-list">
      {options.map(eachOption => (
        <ImageOptionItem
          key={eachOption.id}
          optionData={eachOption}
          isSelected={selectedOptionId === eachOption.id}
          onSelectAnswer={onSelectAnswer}
        />
      ))}
    </ul>
  )

  const renderSingleSelect = () => (
    <Select
      options={options}
      selectedOptionId={selectedOptionId}
      onSelectAnswer={onSelectAnswer}
    />
  )

  const renderOptions = () => {
    switch (options_type) {
      case 'DEFAULT':
        return renderDefaultOptions()

      case 'IMAGE':
        return renderImageOptions()

      case 'SINGLE_SELECT':
        return renderSingleSelect()

      default:
        return null
    }
  }

  return (
    <div className="question-card">
      <h1 className="question-text">{question_text}</h1>

      <hr className="separator" />

      {renderOptions()}
    </div>
  )
}

export default Question
