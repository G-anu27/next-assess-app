import './index.css'

const Timer = props => {
  const {timeLeft} = props

  const minutes = Math.floor(timeLeft / 60)

  const seconds = timeLeft % 60

  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

  return (
    <div className="timer-card">
      <p className="timer-title">Time Left</p>

      <h1 className="timer-time">{formattedTime}</h1>
    </div>
  )
}

export default Timer
