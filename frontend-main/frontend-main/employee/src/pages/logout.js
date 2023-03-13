import { useHistory } from 'react-router-dom'
import './cards.css'

const Logout = () => {
  const history = useHistory()

  const signout = () => {
    localStorage.clear()
    alert('LogOut Successful')
  }
  const cancle = () => {
    history.push('/dashboard/home')
  }

  return (
    <div className="card-logout">
      <br></br><br></br>
      <div className="mb-3">
        <div className="cardlogout-image"></div>
        <br></br><br></br>
        <label className="input-label"><b>Are you sure you want to logout?</b></label><br></br>
        <br></br><br></br>
        <a href="/"><button onClick={signout} className="btn btn-success">
          Log Out
        </button></a>
        &nbsp;&nbsp;&nbsp;
        <button onClick={cancle} className="btn btn-danger">
          Cancle
        </button><br></br>
      </div>
    </div>
  )
}

export default Logout
