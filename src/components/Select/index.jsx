import {useEffect} from 'react'

import './index.css'

const Select = props => {
  const {options, selectedOptionId, onSelectAnswer} = props

  useEffect(() => {
    if (options.length > 0 && selectedOptionId === undefined) {
      onSelectAnswer(options[0].id)
    }
  }, [options, selectedOptionId, onSelectAnswer])

  const onChangeSelect = event => {
    onSelectAnswer(event.target.value)
  }

  return (
    <div className="select-container">
      <select
        className="select-input"
        value={selectedOptionId}
        onChange={onChangeSelect}
      >
        {options.map(eachOption => (
          <option key={eachOption.id} value={eachOption.id}>
            {eachOption.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
