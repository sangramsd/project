import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../cards.css'

const RejectedTask = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    console.log(`Rejected component got loaded`)
    getTasks()
  }, [])

  const history = useHistory()

  const emp = JSON.parse(localStorage.getItem('loginUser'));
  const getTasks = () => {
    if (emp.email.length === 0) {
      alert('Select email')
    } else {
      const data = new FormData()

      data.append('empId', emp.empId)
      axios.post(url + '/admin/getrejecttask', data).then((response) => {
        const result = response.data
        // console.log(result);
        if (result.status === 'success') {
          setTasks(result.data)
          // localStorage.setItem('Task', JSON.stringify(result.data));
          // console.log(result.data)
        } else {
          alert('error while loading list of task')
        }
      })
    }
  }

  const deleteTask = (id, status) => {
    const data = new FormData()
    if (status === "accepted") {
      alert("Cannot Deleted Accepted Task")
    }
    else {
      data.append('tId', id)
      axios.post(url + '/admin/taskdelete', data).then((response) => {
        const result = response.data
        console.log(result);
        if (result.status === 'success') {
          alert("Task Deleted")
          history.push('/dashboard/rejectedtask')
        } else {
          alert('error while deleting task')
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Rejected Tasks</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Task Name</th>
            <th>Project Name</th>
            <th>Employee Name</th>
            <th>Status</th>
            <th width="120px">End Date</th>
            <th>Reassign</th>
            <th>Delete</th>
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
              <td>
                <button
                  onClick={() => {
                    history.push('/dashboard/edittask', { task: task })
                  }}
                  className="btn btn-warning btn-sm">
                  Resign
                </button>
              </td>
              <td> <Link to="/dashboard/deletetask" className="Link"><button
                onClick={() => {
                  deleteTask(task.tId, task.approvalStatus)
                }}
                className="btn btn-danger btn-sm">
                Delete
              </button></Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RejectedTask