import { Link } from 'react-router-dom'
import './cards.css'
import Project from '../images/task.jpg';
import task from '../images/task2.png';

const Home = () => {
  return (
    <div className="card-home">
      <div className="mb-3">
        <div className="cardhome-image"></div>
        <br></br>
        <table className="table table-sm" border="0">
          <tr>
            <td width="50%">
              <Link to="/dashboard/accepttask" className="Link"><img src={task} alt="task " /></Link>
            </td>
            <td>
              <Link to="/dashboard/myproject" className="Link"><img src={Project} alt="Project Management" /></Link>
            </td>
          </tr>
          <tr align="center">
            <td>Task</td>
            <td>Project</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Home
