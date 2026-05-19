import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)

  const navigate = useNavigate()

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Navigate to="/" />
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onToggleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  const onSubmitSuccess = jwtTokenValue => {
    Cookies.set('jwt_token', jwtTokenValue, {
      expires: 30,
    })

    navigate('/')
  }

  const onSubmitFailure = error => {
    setShowError(true)
    setErrorMsg(error)
  }

  const submitForm = async event => {
    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <div className="login-bg-container">
      <div className="login-card">
        <div className="login-image-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/018/765/759/small/quiz-guess-social-media-icon-in-flat-style-faq-illustration-on-isolated-background-help-button-sign-business-concept-vector.jpg"
            alt="website login"
            className="login-image"
           
          />
        </div>

        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://t3.ftcdn.net/jpg/05/32/73/04/360_F_532730425_EiwrFXiBgzIedTDr44MBmYsxYZ0opAnK.jpg"
            alt="login website logo"
            className="website-logo"
          />

          <div className="input-container">
            <label htmlFor="username" className="label">
              USERNAME
            </label>

            <input
              id="username"
              type="text"
              className="input"
              placeholder="Enter Username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>

          <div className="input-container">
            <label htmlFor="password" className="label">
              PASSWORD
            </label>

            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="input"
              placeholder="Enter Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div className="checkbox-container">
            <input
              id="showPassword"
              type="checkbox"
              className="checkbox"
              onChange={onToggleShowPassword}
            />

            <label htmlFor="showPassword" className="show-password-label">
              Show Password
            </label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          {showError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
