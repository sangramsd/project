import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../commons/constants'
import './cards.css'

const Forgotpassword = () => {
  const [empid, setEmpid] = useState('')
  const [email, setEmail] = useState('')
  const [securityQuestion, setSecurityQuestion] = useState('')
  const [password, setPassword] = useState('')

  // get the history object
  const history = useHistory()

  const checkDetails = () => {
    if (email.length === 0) {
      alert('Enter Email')
    } else if (password.length === 0) {
      alert('Enter Password')
    } else if (securityQuestion.length === 0) {
      alert('Enter Security Question')
    } else if (empid.length === 0) {
      alert('Enter Emp Id')
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()
      // add the data
      data.append('email', email)
      data.append('password', password)
      data.append('securityQuestion', securityQuestion)
      data.append('empId', empid)

      // send the data to the API
      axios.post(url + '/user/forgetPassword', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('PassWord Update Successfull')
          // go Home Page
          history.push('/signin')
        } else {
          alert('error while Changing Password')
        }
      })
    }
  }

  return (
    <div class="card">
      <div class="cardforget-image">
        <h3 class="card-heading">Forgot Password</h3>
      </div>
      <h1 className="page-title">Enter details</h1>
      <div className="mb-3">
        <label class="input-label">Employee ID </label><br></br>
        <input
          onChange={(e) => {
            setEmpid(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label class="input-label">What is your favorite place? </label><br></br>
        <input
          onChange={(e) => {
            setSecurityQuestion(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label class="input-label">Email </label><br></br>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor=""> Change Password </label><br></br>
        <input
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button onClick={checkDetails} className="btn btn-success">
          Set Password
        </button><br></br><br></br>
        <Link to="/signin" className="Link"> Back to Login</Link>
      </div>
    </div>
  )
}

export default Forgotpassword