import { Link} from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li> <div className="img_logo"></div> </li>
                <li> <Link to="/dashboard/home" className="nav-link">Dashboard</Link> </li>
                <li> <Link to="/dashboard/myprofile" className="nav-link">Profile</Link> </li>
                <li> <Link to="/dashboard/signup" className="nav-link">Add Employee</Link> </li>
                <li> <Link to="/dashboard/addtask" className="nav-link">Add task</Link> </li>
                <li> <Link to="/dashboard/addproject" className="nav-link">Add project</Link> </li>
                <li> <Link to="/dashboard/addclient" className="nav-link">Add client</Link> </li>
                <li> <Link to="/dashboard/projectlist" className="nav-link">project List</Link> </li>
                <li> <Link to="/dashboard/clientlist" className="nav-link">client List</Link> </li>
                <li> <Link to="/dashboard/tasklist" className="nav-link">task List</Link> </li>
                <li> <Link to="/dashboard/help" className="nav-link">Help</Link> </li>
                <li> <Link to="/dashboard/logout" className="nav-link">Logout</Link> </li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar