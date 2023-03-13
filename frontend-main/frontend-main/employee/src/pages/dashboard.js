import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './home'
import Task from './task/task'
import ViewTask from './task/viewTask'
import AcceptTask from './task/acceptTask'
import SubmitTask from './task/submitTask'
import Project from './project/project'
import ViewProject from './project/viewProject'
import Profile from './profile'
import EditProfile from './editProfile'
import Help from './help'
import Logout from './logout'
import Sidebar from '../components/sidebar'
import './dashboard.css'

const Dashboard = () => {

  const details = JSON.parse(localStorage.getItem('loginUser'));
    return (
       <div className="container">
        <BrowserRouter>
       <div className="fixed"> 
      <Sidebar />
       </div>
      <div className="flex-item" >
        <p align="right">user : <b> {details.firstName} {details.lastName} </b> ({details.designation})  </p>
        <Switch>
        <Route path="/dashboard/home" component={Home} />
        <Route path="/dashboard/mytask" component={Task} />
        <Route path="/dashboard/accepttask" component={AcceptTask} />
        <Route path="/dashboard/myproject" component={Project} />
        <Route path="/dashboard/myprofile" component={Profile} />
        <Route path="/dashboard/editprofile" component={EditProfile} />
        <Route path="/dashboard/submittask" component={SubmitTask} />
        <Route path="/dashboard/viewtask" component={ViewTask} />
        <Route path="/dashboard/viewproject" component={ViewProject} />
        <Route path="/dashboard/help" component={Help} />
        <Route path="/dashboard/logout" component={Logout} />
        </Switch>
      </div>
      </BrowserRouter>
      </div>
    )
}

export default Dashboard