import './index.css'

const ButtonOptionItem = props => {
  const {optionData, isSelected, onSelectAnswer} = props

  const {id, text} = optionData

  const onClickOption = () => {
    onSelectAnswer(id)
  }

  const selectedClassName = isSelected ? 'selected-option' : ''

  return (
    <li className="button-option-item">
      <button
        type="button"
        className={`option-btn ${selectedClassName}`}
        onClick={onClickOption}
      >
        {text}
      </button>
    </li>
  )
}

export default ButtonOptionItem
