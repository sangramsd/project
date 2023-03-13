import {Link} from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li> <div className="img_logo"></div> </li>
                <li> <Link to="/dashboard/home" className="nav-link">Dashboard</Link> </li>
                <li> <Link to="/dashboard/mytask" className="nav-link">Task</Link> </li>
                <li> <Link to="/dashboard/myproject" className="nav-link">Projects</Link> </li>
                <li> <Link to="/dashboard/myprofile" className="nav-link">Profile</Link> </li>
                <li> <Link to="/dashboard/help" className="nav-link">Help</Link> </li>
                <li> <Link to="/dashboard/logout" className="nav-link">Logout</Link> </li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar