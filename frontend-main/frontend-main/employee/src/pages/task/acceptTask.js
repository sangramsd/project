import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../cards.css'

const AcceptTask = () => {
  const [acceptStatus] = useState('accepted')
  const [rejectStatus] = useState('rejected')
  const [status] = useState('working')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log(`Tasklist component got loaded`)
    getTasks()
  }, [])

  const history = useHistory()

  let today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  // console.log(date)

  const emp = JSON.parse(localStorage.getItem('loginUser'));
  const getTasks = () => {
    const data = new FormData()
    data.append('empId', emp.empId)
    axios.post(url + '/user/acceptlist', data).then((response) => {
      const result = response.data
      // console.log(result);
      localStorage.setItem('AcceptTask', JSON.stringify(result.data));

      if (result.status === 'success') {
        setTasks(result.data)
        localStorage.setItem('AcceptTask', JSON.stringify(result.data));
        // console.log(result.data)
      } else {
        alert('error while loading list of accept task ')
      }
    })
  }

  const reject = (id) => {
    const data = new FormData()

    data.append('tId', id)
    data.append('approvalStatus', rejectStatus)
    data.append('tStatus', 'Reassign')

    axios.post(url + '/user/taskstatus', data).then((response) => {
      const result = response.data
      console.log(result);
      if (result.status === 'success') {
        alert("Task Rejected Successful")
        history.push('/dashboard/mytask')
      } else {
        alert('error while loading list of accept task ')
      }
    })
  }

  const accept = (id) => {
    const data = new FormData()

    data.append('tId', id)
    data.append('approvalStatus', acceptStatus)
    data.append('tStatus', status)
    data.append('tAcceptDate', date)

    axios.post(url + '/user/taskstatus', data).then((response) => {
      const result = response.data
      console.log(result);
      if (result.status === 'success') {
        alert("Task Accepted")
        history.push('/dashboard/mytask')
      } else {
        alert('error while loading list of accept task ')
      }
    })
  }

  return (
    <div className="card-task">
      <h1 className="page-title">Tasks Waiting List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Name</th>
            <th>Project Name</th>
            <th>End Date</th>
            <th>Details</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <tr>
              <td>{task.tId}</td>
              <td>{task.tName} </td>
              <td>{task.project.pName}</td>
              <td>{task.tEndDate}</td>
              <td> <button
                onClick={() => {
                  history.push('/dashboard/viewtask', { task: task })
                }}
                className="btn btn-info btn-sm">
                View
              </button>
              </td>
              <td> <button
                onClick={() => {
                  accept(task.tId)
                }}
                className="btn btn-success btn-sm">
                Accept
              </button>
              </td>
              <td> <button
                onClick={() => {
                  reject(task.tId)
                }}
                className="btn btn-warning btn-sm">
                Reject
              </button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AcceptTask