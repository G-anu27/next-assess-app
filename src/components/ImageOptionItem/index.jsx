import './index.css'

const ImageOptionItem = props => {
  const {optionData, isSelected, onSelectAnswer} = props

  const {id, image_url, text} = optionData

  const onClickImageOption = () => {
    onSelectAnswer(id)
  }

  const selectedClassName = isSelected ? 'selected-image-option' : ''

  return (
    <li className="image-option-item">
      <button
        type="button"
        className={`image-btn ${selectedClassName}`}
        onClick={onClickImageOption}
      >
        <img src={image_url} alt={text} className="option-image" />
      </button>
    </li>
  )
}

export default ImageOptionItem
