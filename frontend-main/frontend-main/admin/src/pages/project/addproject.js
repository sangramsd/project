import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'

const Addproject = () => {
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [cid, setCid] = useState('')
  const [pstatus] = useState('On Going')
  const [clients, setClients] = useState([])

  const history = useHistory()
  const emp = JSON.parse(localStorage.getItem('loginUser'));

  useEffect(() => {
    console.log(`Client component got loaded`)
    getDepts();
    createdBySet()
  }, [])

  const getDepts = () => {
    axios.get(url + '/admin/getclient').then((response) => {
      const result = response.data
      console.log(result);
      if (result.status === 'success') {
        setClients(result.data)
      } else {
        alert('error while loading list of Depts')
      }
    })
  }

  const createdBySet = () => {
    setCreatedBy(emp.empId)
  }

  const validateName = (name) => {
    const re = /^[A-Za-z\s]+$/
    return re.test(name);
  }

  const addUserToDB = () => {
    const sDate = new Date(startDate)
    const eDate = new Date(endDate)
    if (eDate < sDate) {
      alert('End Date should be Greater then Start Date')
    } else if (projectName.length === 0) {
      alert('Enter Project Name')
    } else if (description.length === 0) {
      alert('Enter Description')
    } else if (createdBy.length === 0) {
      alert('Enter CreatedBy')
    } else if (startDate.length === 0) {
      alert('Enter Start Date')
    } else if (endDate.length === 0) {
      alert('Enter End Date')
    } else if (!validateName(projectName)) {
      alert('Invalid Project Name')
    } else if (description.length > 900) {
      alert('Description should be less than 900 Words')
    } else {
      const data = new FormData()
      data.append('pName', projectName)
      data.append('pDesc', description)
      data.append('pCreatedBy', createdBy)
      data.append('pStartDate', startDate)
      data.append('pEndDate', endDate)
      data.append('client', cid)
      data.append('pStatus', pstatus)

      axios.post(url + '/admin/addproject', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('project added Successful')
          // go to SignIN page
          history.push('/dashboard/projectlist')
        } else {
          alert('error while adding project')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <div className="row">
        <h2><center> Add Project </center> </h2>
        <div className="col">
          <label class="input-label">Project Name</label><br></br>
          <input
            onChange={(e) => {
              setProjectName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Client Name</label><br></br>
          <select
            onChange={(e) => {
              setCid(e.target.value)
            }}
            className="form-control" >
            <option value=""> Select Client </option>
            {(clients).map((client) => {
              return (
                <option value={client.cId}> {client.cId} {client.cName} </option>)
            })}
          </select>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col" >
          <label className="input-label">Start Date</label><br></br>
          <input
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
        <div className="col" >
          <label class="input-label">End Date</label><br></br>
          <input
            onChange={(e) => {
              setEndDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Project Description</label><br></br>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            name="message" rows="8" maxlength="900" className="form-control" />
        </div>
      </div>
      <br></br>
      <div className="mb-3" align="center">
        <button onClick={addUserToDB} className="btn btn-success">
          Add Project
        </button><br></br><br></br>
      </div>
    </div>
  )
}

export default Addproject