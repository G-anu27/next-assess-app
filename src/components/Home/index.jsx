//  Write your code here
import {useNavigate} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const navigate = useNavigate()

  const onClickStartAssessment = () => {
    navigate('/assessment')
  }

  return (
    <>
      <Header />

      <div className="home-container">
        <div className="home-card">
          <div className="home-content">
            <h1 className="home-heading">Welcome to Nxt Assess</h1>

            <p className="home-description">
              Practice coding and improve your skills with timed assessments.
              Analyze your performance and become interview ready.
            </p>

            <button
              type="button"
              className="start-btn"
              onClick={onClickStartAssessment}
            >
              Start Assessment
            </button>
          </div>

          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/1186386668/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=mBQMqQ6kZuC9ZyuV5_uCm80QspqSJ7vRm0MfwL3KLZY="
              alt="assessment"
              className="assessment-image"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
