import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'

const Addtask = () => {
  const [pid, setPid] = useState('')
  const [empid, setEmpid] = useState('')
  const [deptid, setDeptid] = useState('')
  const [taskName, setTaskname] = useState('')
  const [description, setDescription] = useState('')
  const [assignDate, setAssignDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [acceptStatus] = useState('waiting')
  const [status] = useState('todo')
  const [submissionStatus] = useState('Not Submitted')
  const [projects, setProjects] = useState([])
  const [employees, setEmployees] = useState([])
  const [depts, setDepts] = useState([])

  // get the history object
  const history = useHistory()

  useEffect(() => {
    console.log(`component got loaded`)
    getProjects()
    getDepts()
  }, [])

  const getProjects = () => {
    axios.get(url + '/admin/getprojects').then((response) => {
      const result = response.data
      console.log(result);
      if (result.status === 'success') {
        setProjects(result.data)
      } else {
        alert('error while loading list of Projects')
      }
    })
  }

  const getEmpByDept = () => {
    if (deptid.length === 0) {
      alert('Select Department Id')
    } else {
      const data = new FormData()
      data.append('deptId', deptid)
      // console.log("septid=>" + deptid)
      axios.post(url + '/getemplist', data).then((response) => {
        const result = response.data
        // console.log(result);
        if (result.status === 'success') {
          setEmployees(result.data)
        } else {
          alert('error while loading list of Employee')
        }
      })
    }
  }

  const getDepts = () => {
    axios.get(url + '/depts').then((response) => {
      const result = response.data
      // console.log(result);
      if (result.status === 'success') {
        setDepts(result.data)
      } else {
        alert('error while loading list of Depts')
      }
    })
  }

  const addUserToDB = () => {
    const aDate = new Date(assignDate)
    const eDate = new Date(endDate)
    if (eDate < aDate) {
      alert('End Date should be Greater then Assign Date')
    } else if (pid.length === 0) {
      alert('Select Project id')
    } else if (empid.length === 0) {
      alert('Select Employee id')
    } else if (taskName.length === 0) {
      alert('Enter Task Name')
    } else if (description.length === 0) {
      alert('Enter Description')
    } else if (assignDate.length === 0) {
      alert('Enter Assign Date')
    } else if (endDate.length === 0) {
      alert('Enter End Date')
    } else if (description.length > 500) {
      alert('Description should be less than 500 Words')
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()
      // add the data
      data.append('project', pid)
      data.append('emp', empid)
      data.append('tName', taskName)
      data.append('tDesc', description)
      data.append('tAssignDate', assignDate)
      data.append('tEndDate', endDate)
      data.append('approvalStatus', acceptStatus)
      data.append('tStatus', status)
      data.append('tSubmissionStatus', submissionStatus)

      // send the data to the API
      axios.post(url + '/admin/addtask', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('Add Task Successful')
          // go to SignIN page
          history.push('/dashboard/tasklist')
        } else {
          alert('error while adding task')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <h2 align="center">Add New Task</h2><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label"> Project </label><br></br>
          <select
            onChange={(e) => {
              setPid(e.target.value)
            }}
            className="form-control" >
            <option value=""> Select Projects </option>
            {(projects).map((project) => {
              return (
                <option value={project.pId}> {project.pId} {project.pName} </option>)
            })}
          </select>
        </div>
        <div className="col">
          <label class="input-label"> Task Name</label><br></br>
          <input
            onChange={(e) => {
              setTaskname(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label"> Assign Date</label><br></br>
          <input
            onChange={(e) => {
              setAssignDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">End Date</label><br></br>
          <input
            onChange={(e) => {
              setEndDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col" >
          <label className="input-label">Department Id</label><br></br>
          <div className="btn-flex">
            <select
              onChange={(e) => {
                setDeptid(e.target.value)
              }}
              className="form-control" >
              <option value=""> Select dept </option>
              {(depts).map((dept) => {
                return (
                  <option value={dept.deptId}> {dept.deptId} {dept.deptName} </option>)
              })}
            </select> &nbsp;&nbsp;&nbsp;
            <button onClick={getEmpByDept} className="btn btn-info"> Set </button>
          </div>
        </div>
        <div className="col" >
          <label className="input-label">Employee </label><br></br>
          <select
            onChange={(e) => {
              setEmpid(e.target.value)
            }}
            className="form-control" >
            <option value=""> Select Employee </option>
            {(employees).map((employee) => {
              return (
                <option value={employee.empId}> {employee.empId} {employee.firstName} {employee.lastName} </option>)
            })}
          </select>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Task Description</label><br></br>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            name="message" rows="5" maxlength="500" className="form-control" />
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="mb-3" align="center">
          <button onClick={addUserToDB} className="btn btn-success">
            Add Task
          </button><br></br><br></br>
        </div>
      </div>
    </div>
  )
}

export default Addtask