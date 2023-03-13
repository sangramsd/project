
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'


const EditTask = () => {
  const [taskName, setTaskName] = useState('')
  const [description, setDescription] = useState('')
  const [assignDate, setAssignDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [approvalStatus, setApprovalStatus] = useState('')
  const [employees, setEmployees] = useState([])
  const [depts, setDepts] = useState([])
  const [empid, setEmpid] = useState('')
  const [deptid, setDeptid] = useState('')
  const [remark, setRemark] = useState('')

  const history = useHistory()
  const location = useLocation()
  const task = location.state.task

  useEffect(() => {
    console.log(`Profile component got loaded`)
    setData();
    getDepts()
  }, [])

  const setData = () => {
    setTaskName(task.tName)
    setEmpid(task.emp.empId)
    setDescription(task.tDesc)
    setAssignDate(task.tAssignDate)
    setEndDate(task.tEndDate)
    setApprovalStatus(task.approvalStatus)
    setRemark(task.remark)
  }

  const editTaskInDB = () => {
    const aDate = new Date(assignDate)
    const eDate = new Date(endDate)
    if (eDate < aDate)
      alert('End Date should be Greater then Assign Date')
    if (taskName.length === 0) {
      alert('Enter Task Name')
    } else if (description.length === 0) {
      alert('Enter Description')
    } else if (assignDate.length === 0) {
      alert('Enter Assign Date')
    } else if (endDate.length === 0) {
      alert('Enter End Date')
    } else if (approvalStatus.length === 0) {
      alert('Enter Approval Status')
    } else if (empid.length === 0) {
      alert('Select Emp id')
    } else if (description.length > 500) {
      alert('Description should be less than 500 Words')
    } else if (remark != null && remark.length > 100) {
      alert('Remark should be less than 100 Words')
    } else {
      const data = new FormData()
      data.append('tId', task.tId)
      data.append('emp', empid)
      data.append('tName', taskName)
      data.append('tDesc', description)
      data.append('tAssignDate', assignDate)
      data.append('tEndDate', endDate)
      data.append('approvalStatus', approvalStatus)
      data.append('remark', remark)

      axios.post(url + '/admin/editttask', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('Edit task Successful')
          history.push('/dashboard/tasklist')
        } else {
          alert('Something went wrong')
        }
      })
    }
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
  return (
    <div class="cardSignup">
      <h2 align="center">Edit Task</h2><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Task Name</label><br></br>
          <input
            defaultValue={task.tName}
            onChange={(e) => {
              setTaskName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">ApprovalStatus</label><br></br>
          <select
            defaultValue={task.approvalStatus}
            onChange={(e) => {
              setApprovalStatus(e.target.value)
            }}
            className="form-control" >
            <option value=""> Select approvalStatus </option>
            <option value="waiting"> Waiting</option>
            <option value="accepted"> Accepted</option>
            <option value="rejected"> Rejected </option>
          </select>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label"> Assign Date</label><br></br>
          <input
            defaultValue={assignDate}
            onChange={(e) => {
              setAssignDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">End Date</label><br></br>
          <input
            defaultValue={endDate}
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
                setDeptid(e.target.value);
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
            defaultValue={task.emp.empId}
            onChange={(e) => {
              setEmpid(e.target.value)
            }}
            className="form-control" >
            <option value=""> {task.emp.empId} {task.emp.firstName} (current employee) </option>
            {(employees).map((employee) => {
              return (
                <option value={employee.empId}> {employee.empId} {employee.firstName} {employee.lastName} </option>)
            })}
          </select>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label">Task Description</label><br></br>
          <textarea
            defaultValue={task.tDesc}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            name="message" rows="4" maxlength="500" className="form-control" />
        </div>
      </div><br></br>

      <div className="row">
        <div className="col">
          <label class="input-label">Task Remark</label><br></br>
          <textarea
            defaultValue={task.remark}
            onChange={(e) => {
              setRemark(e.target.value)
            }}
            name="message" rows="4" maxlength="100" className="form-control" />
        </div>
      </div><br></br>
      <div className="mb-3" align="center">
        <button onClick={editTaskInDB} className="btn btn-success">
          Edit Task
        </button> &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            history.push('/dashboard/viewtask', { task: task })
          }}
          className="btn btn-info">
          Back to View TaskList
        </button>
        <br></br> <br></br>
      </div>
    </div>
  )
}
export default EditTask
