
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'

const EditProject = () => {
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [subDate, setSubDate] = useState('')
  const [progress, setProgress] = useState('')
  const [report, setReport] = useState('')
  const [status, setstatus] = useState('')

  const history = useHistory()
  const location = useLocation()
  const pro = location.state.project

  useEffect(() => {
    console.log(`Profile component got loaded`)
    setData()
  }, [])

  const setData = () => {
    setProjectName(pro.pName)
    setDescription(pro.pDesc)
    setStartDate(pro.pStartDate)
    setEndDate(pro.pEndDate)
    setProgress(pro.pProgress)
    setReport(pro.pReport)
    setstatus(pro.pStatus)
  }

  const validateName = (name) => {
    const re = /^[A-Za-z\s]+$/
    return re.test(name);
  }

  const addUserToDB = () => {
    if (projectName.length === 0) {
      alert('Enter Project Name')
    } else if (description.length === 0) {
      alert('Enter Description Name')
    } else if (startDate.length === 0) {
      alert('Enter Start Date')
    } else if (endDate.length === 0) {
      alert('Enter End Date')
    } else if (!validateName(projectName)) {
      alert('Invalid Project Name')
    } else {
      const data = new FormData()
      data.append('pId', pro.pId)
      data.append('client', pro.client.cId)
      data.append('pCreatedBy', pro.pCreatedBy)
      data.append('pName', projectName)
      data.append('pDesc', description)
      data.append('pStartDate', startDate)
      data.append('pEndDate', endDate)
      data.append('pSubmittedDate', subDate)
      data.append('pProgress', progress)
      data.append('pReport', report)
      data.append('pStatus', status)

      // send the data to the API
      axios.post(url + '/admin/editproject', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('Edit Project Successful')
          history.push('/dashboard/projectlist')
        } else {
          alert('Something went wrong')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <h2 align="center"> Edit Project </h2><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Project Name</label><br></br>
          <input
            defaultValue={projectName}
            onChange={(e) => {
              setProjectName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Start Date</label><br></br>
          <input
            defaultValue={startDate}
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label">End Date</label><br></br>
          <input
            defaultValue={endDate}
            onChange={(e) => {
              setEndDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Submit Date</label><br></br>
          <input
            defaultValue={subDate}
            onChange={(e) => {
              setSubDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col" >
          <label className="input-label">Progress</label><br></br>
          <select
            defaultValue={progress}
            onChange={(e) => {
              setProgress(e.target.value)
            }} className="form-control" >
            <option value={progress}>{progress} (current value) </option>
            <option value="started">Started</option>
            <option value="working">Working</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="col" >
          <label class="input-label">Status</label><br></br>
          <select
            defaultValue={status}
            onChange={(e) => {
              setstatus(e.target.value)
            }} className="form-control" >
            <option value={status}>{status} (current value) </option>
            <option value="started">Started</option>
            <option value="ON Going">On Going</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Description</label><br></br>
          <textarea
            defaultValue={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            name="message" rows="6" className="form-control" />
        </div>
      </div><br></br>
      <div className="col">
        <label className="input-label">Report</label><br></br>
        <textarea
          defaultValue={report}
          onChange={(e) => {
            setReport(e.target.value)
          }}
          name="message" rows="6" className="form-control" />
      </div><br></br>

      <div className="mb-3" align="center">
        <button onClick={addUserToDB} className="btn btn-success">
          Update Project
        </button> &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            history.push('/dashboard/viewproject', { project: pro })
          }}
          className="btn btn-info">
          Back to Project
        </button>
        <br></br> <br></br>
      </div>
      <div className="container">
      </div>
    </div>
  )
}

export default EditProject
