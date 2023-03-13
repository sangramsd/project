
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'

const Viewproject = () => {
  const [tasks, setTasks] = useState([])

  const history = useHistory()
  const location = useLocation()
  const project = location.state.project

  let sDate = undefined
  let eDate = undefined
  let subDate = undefined
  if (project.pStartDate != null) {
    sDate = project.pStartDate.substring(0, 10);
  }
  if (project.pEndDate != null) {
    eDate = project.pEndDate.substring(0, 10);
  }
  if (project.pSubmittedDate != null) {
    subDate = project.pSubmittedDate.substring(0, 10);
  }

  useEffect(() => {
    console.log(`Client component got loaded`)
    getTasksofProject()
  }, [])

  const getTasksofProject = () => {
    const data = new FormData()
    data.append('project', project.pId)
    axios.post(url + '/admin/gettaskofProject', data).then((response) => {
      const result = response.data
      // console.log(result);
      if (result.status === 'success') {
        setTasks(result.data)
        // console.log(result.data)
        // localStorage.setItem('taskList', JSON.stringify(result.data));
      } else {
        alert('error while loading list of task')
      }
    })
  }

  return (
    <div className="cardViewList">
      <table class="table table-success table-striped">
        <tbody>
          <tr><td colSpan="3" align="center" ><h2> Project Information </h2></td></tr>
          <tr> <th scope="row">Project Id</th> <td>:-</td>  <td>{project.pId} </td> </tr>
          <tr> <th scope="row">Name</th> <td>:-</td> <td>{project.pName}</td>  </tr>
          <tr> <th scope="row">Cient Name</th> <td>:-</td> <td> {project.client.cName} </td> </tr>
          <tr> <th scope="row">Description</th> <td>:-</td> <td> {project.pDesc} </td> </tr>
          <tr> <th scope="row">Credted By</th> <td>:-</td> <td> {project.pCreatedBy} </td> </tr>
          <tr> <th scope="row">Start Date</th> <td>:-</td> <td> {sDate} </td> </tr>
          <tr> <th scope="row">End Date</th> <td>:-</td> <td> {eDate} </td> </tr>
          <tr> <th scope="row">Submitted Date</th> <td>:-</td> <td> {subDate} </td> </tr>
          <tr> <th scope="row">Progress</th> <td>:-</td> <td> {project.pProgress} </td> </tr>
          <tr> <th scope="row">Report</th> <td>:-</td> <td> {project.pReport} </td> </tr>
          <tr> <th scope="row">Status</th> <td>:-</td> <td> {project.pStatus} </td> </tr>
        </tbody>
      </table>
      <div align="center">
        <button onClick={() => {
          history.push('/dashboard/editproject', { project: project })
        }}
          className="btn btn-success">
          Edit Project
        </button> &nbsp;&nbsp;&nbsp;
        <Link to="/dashboard/projectlist" className="Link"><button className="btn btn-info">Back to Project List</button>
        </Link></div>
      <div><br></br>
        <h3 className="page-title">Tasks in project :{project.pId}</h3>
        <table className="table table-danger table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Employee Name</th>
              <th>Accept Status</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              return <tr>
                <td>{task.tId}</td>
                <td>{task.tName} </td>
                <td>{task.project.pName}</td>
                <td>{task.emp.firstName} {task.emp.lastName}</td>
                <td>{task.approvalStatus}</td>
                <td>{task.tEndDate}</td>
                <td>{task.tStatus}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Viewproject
