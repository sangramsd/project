
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'


const SubmitTask = () => {
  const [tReport, settReport] = useState('')
  const [subStatus, setSubStatus] = useState('')
  const [status] = useState('completed')

  const history = useHistory()
  const location = useLocation()
  const task = location.state.task

  let today = new Date()
  const submitteddate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  // console.log(date)
  const eDate = new Date(task.tEndDate)
  const sDate = new Date(submitteddate)
  console.log("DATE e " + task.tEndDate + " date S " + submitteddate)

  useEffect(() => {
    console.log(`Submited component got loaded`)
    setData();
  }, [])

  const setData = () => {
    if (eDate === sDate) {
      setSubStatus('On Time')
      console.log("111111")
    } else if (eDate < sDate) {
      setSubStatus('Late Submission')
      console.log("22222")
    } else if (eDate > sDate) {
      setSubStatus('Submitted Early')
      console.log("333333")
      console.log("in IF sub :" + subStatus)
    }
  }

  const addUserToDB = () => {

    const data = new FormData()

    if (tReport.length > 200) {
      console.log("44444")
      alert('Report should be less than 200 Words')
    } else {


      data.append('tId', task.tId)
      data.append('tReport', tReport)
      data.append('tSubmittedDate', submitteddate)
      data.append('tStatus', status)
      console.log("append sub :" + subStatus)
      data.append('tSubmissionStatus', subStatus)

      axios.post(url + '/admin/submittask', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('Task Submitted Successfully')
          history.push('/dashboard/mytask')
        } else {
          alert('Something went wrong')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <h2 align="center">Submit Task</h2><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Task Id</label><br></br>
          <input
            defaultValue={task.tId}
            type="text" readOnly="true" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Task Name</label><br></br>
          <input
            defaultValue={task.tName}
            type="text" readOnly="true" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label">Remark</label><br></br>
          <textarea
            defaultValue={task.remark} readOnly
            name="message" rows="2" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label">Task Report</label><br></br>
          <textarea
            onChange={(e) => {
              settReport(e.target.value)
            }}
            name="message" rows="4" maxlength="200" className="form-control" />
        </div>
      </div><br></br>
      <div className="mb-3" align="center">
        <button onClick={addUserToDB} className="btn btn-success">
          Submit Task
        </button> &nbsp;&nbsp;&nbsp;
        <Link to="/dashboard/mytask" className="Link"><button className="btn btn-info">Back to task</button> </Link>
        <br></br> <br></br>
      </div>

    </div>
  )
}
export default SubmitTask
