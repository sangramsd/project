import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../cards.css'

const Project = () => {

  const [tasks, setTasks] = useState([])
  const history = useHistory()
  useEffect(() => {
    console.log(`project component got loaded`)
    getProject()
  }, [])

  const emp = JSON.parse(localStorage.getItem('loginUser'));
  const getProject = () => {
    if (emp.email.length === 0) {
      alert('Select email')
    } else {
      const data = new FormData()

      data.append('empId', emp.empId)

      axios.post(url + '/user/gettask', data).then((response) => {
        const result = response.data
        console.log(result);

        if (result.status === 'success') {
          setTasks(result.data)
          // localStorage.setItem('project', JSON.stringify(result.data))
          // console.log(result.data)
        } else {
          alert('error while loading list of project')
        }
      })
    }
  }

  return (
    <div className="card-project">
      <h1 className="page-title">Project</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Project Name</th>
            <th>Client Name</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <tr>
              <td>{task.project.pId}</td>
              <td>{task.project.pName} </td>
              <td>{task.project.client.cName} </td>
              <td>{task.project.pEndDate}</td>
              <td>{task.project.pStatus}</td>
              <td> <button
                onClick={() => {
                  history.push('/dashboard/viewproject', { task: task })
                }}
                className="btn btn-success btn-sm">
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

export default Project