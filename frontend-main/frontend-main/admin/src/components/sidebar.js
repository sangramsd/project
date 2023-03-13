import { Link } from 'react-router-dom'
import './sidebar.css'
import './dropdown.css'

const Sidebar = () => {
    const callFun = () => {
        let dropdown = document.getElementsByClassName("dropdown-btn");
        let i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }

    return (
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li> <div className="img_logo"></div> </li>
                    <li> <Link to="/dashboard/home" className="nav-link">Dashboard</Link> </li>
                    <li>
                        <button class="dropdown-btn " onClick={callFun} >  Project &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>+</b>
                        </button>
                        <div class="dropdown-container" >
                            <Link to="/dashboard/projectlist" className="nav-link">Project List</Link>
                            <Link to="/dashboard/addproject" className="nav-link">Add project</Link>

                        </div>
                    </li>
                    <li>
                        <button class="dropdown-btn" onClick={callFun} >  Task &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>+</b>
                        </button>
                        <div class="dropdown-container" >
                            <Link to="/dashboard/tasklist" className="nav-link">Task List</Link>
                            <Link to="/dashboard/addtask" className="nav-link">Add task</Link>
                            <Link to="/dashboard/rejectedtask" className="nav-link">Rejected List</Link>
                        </div>
                    </li>
                    <li>
                        <button class="dropdown-btn" onClick={callFun} >  Client &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>+</b>
                        </button>
                        <div class="dropdown-container" >
                            <Link to="/dashboard/clientlist" className="nav-link">Client List</Link>
                            <Link to="/dashboard/addclient" className="nav-link">Add client</Link>
                        </div>
                    </li>
                    <li>
                        <button class="dropdown-btn" onClick={callFun} >  Employee &nbsp;&nbsp;  <b>+</b>
                        </button>
                        <div class="dropdown-container" >
                            <Link to="/dashboard/employeelist" className="nav-link">Employee List</Link>
                            <Link to="/dashboard/signup" className="nav-link">Add Employee</Link>
                        </div>
                    </li>
                    <li> <Link to="/dashboard/myprofile" className="nav-link">Profile</Link> </li>
                    <li> <Link to="/dashboard/help" className="nav-link">Help</Link> </li>
                    <li> <Link to="/dashboard/logout" className="nav-link">Logout</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar