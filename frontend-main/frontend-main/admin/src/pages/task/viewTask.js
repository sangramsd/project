import { Link, useLocation, useHistory } from 'react-router-dom'
import '../signup.css'

const ViewTask = () => {

  const location = useLocation()
  const task = location.state.task
  const history = useHistory()

  return (
    <div className="cardSignup">
      <table class="table table-success table-striped">
        <tbody>
          <tr> <th scope="row" colSpan="3" ><center><h3>Task Information</h3></center> </th> </tr>
          <tr> <th scope="row">Task Id</th> <td>:-</td>  <td>{task.tId} </td> </tr>
          <tr> <th scope="row">Project Name</th> <td>:-</td> <td>{task.project.pName}</td>  </tr>
          <tr> <th scope="row">Task Name</th> <td>:-</td> <td> {task.tName} </td> </tr>
          <tr> <th scope="row">Employee Name</th> <td>:-</td> <td> {task.emp.firstName} {task.emp.lastName}</td> </tr>
          <tr> <th scope="row">Assign Date</th> <td>:-</td> <td> {task.tAssignDate} </td> </tr>
          <tr> <th scope="row">End Date</th> <td>:-</td> <td> {task.tEndDate} </td> </tr>
          <tr> <th scope="row">Accepted Date</th> <td>:-</td> <td> {task.tAcceptDate} </td> </tr>
          <tr> <th scope="row">Submitted Date</th> <td>:-</td> <td> {task.tSubmittedDate} </td> </tr>
          <tr> <th scope="row">Task status</th> <td>:-</td> <td> {task.tStatus} </td> </tr>
          <tr> <th scope="row">Task Description</th> <td>:-</td> <td> {task.tDesc} </td> </tr>
          <tr> <th scope="row">Task Report</th> <td>:-</td> <td> {task.treport} </td> </tr>
          <tr> <th scope="row">Task Submited Status</th> <td>:-</td> <td> {task.tSubmissionStatus} </td> </tr>
          <tr> <th scope="row">Task Remark</th> <td>:-</td> <td> {task.remark} </td> </tr>
        </tbody>
      </table>
      <div className="mb-3" align="center">
        <button onClick={() => {
          history.push('/dashboard/edittask', { task: task })
        }}
          className="btn btn-success">
          Edit Task
        </button> &nbsp;&nbsp;&nbsp;
        <Link to="/dashboard/tasklist" className="Link"><button className="btn btn-info">Back to Task</button></Link>
      </div>
    </div>
  )
}

export default ViewTask