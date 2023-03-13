import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../commons/constants'

const AccetedList = () => {
  // maintain the state
  const [tasks, setTasks] = useState([])

  const history = useHistory()

  useEffect(() => {
    console.log(`Client component got loaded`)
    getTasks()
  }, [])

  const getTasks = () => {
    axios.get(url + '/admin/accepttasklist').then((response) => {
      const result = response.data
      console.log(result);
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
    <div>
      <h1 className="page-title">Tasks</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Project Name</th>
            <th>Employee Name</th>
            <th>Accept Status</th>
            <th>End Date</th>
            <th>Status</th>
            <th>View</th>
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
              <td> <button
                onClick={() => {
                  history.push('/dashboard/viewtask', { task: task })
                }}
                className="btn btn-info btn-sm">
                View
              </button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AccetedList
