import { Link, useLocation } from 'react-router-dom'
import '../signup.css'

const ViewTask = () => {

  const location = useLocation()
  const task = location.state.task

  let aDate = undefined
  let eDate = undefined
  let accDate = undefined
  let subDate = undefined
  if (task.tAssignDate != null) {
    aDate = task.tAssignDate.substring(0, 10);
  }
  if (task.tEndDate != null) {
    eDate = task.tEndDate.substring(0, 10);
  }
  if (task.tAcceptDate != null) {
    accDate = task.tAssignDate.substring(0, 10);
  }
  if (task.tSubmittedDate != null) {
    subDate = task.tSubmittedDate.substring(0, 10);
  }

  return (
    <div className="cardSignup">
      <table class="table table-success table-striped">
        <tbody>
          <tr> <th scope="row" colSpan="3" ><center><h3>Task Info</h3></center> </th> </tr>

          <tr> <th scope="row">Task Id</th> <td>:-</td>  <td>{task.tId} </td> </tr>
          <tr> <th scope="row">Project Name</th> <td>:-</td> <td>{task.project.pName}</td>  </tr>
          <tr> <th scope="row">Task Name</th> <td>:-</td> <td> {task.tName} </td> </tr>
          <tr> <th scope="row">Assign Date</th> <td>:-</td> <td> {aDate} </td> </tr>
          <tr> <th scope="row">End Date</th> <td>:-</td> <td> {eDate} </td> </tr>
          <tr> <th scope="row">Accepted Date</th> <td>:-</td> <td> {accDate} </td> </tr>
          <tr> <th scope="row">Submitted Date</th> <td>:-</td> <td> {subDate} </td> </tr>
          <tr> <th scope="row">Task status</th> <td>:-</td> <td> {task.tStatus} </td> </tr>
          <tr> <th scope="row">Task Description</th> <td>:-</td> <td> {task.tDesc} </td> </tr>
          <tr> <th scope="row">Task Report</th> <td>:-</td> <td> {task.treport} </td> </tr>
          <tr> <th scope="row">Task Remark</th> <td>:-</td> <td> {task.remark} </td> </tr>
        </tbody>
      </table>
      <div className="mb-3" align="center">
        <Link to="/dashboard/mytask" className="Link"><button className="btn btn-info">Tasklist</button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/dashboard/accepttask" className="Link"><button className="btn btn-secondary">Task Waiting List</button> </Link>
      </div>
    </div>
  )
}

export default ViewTask