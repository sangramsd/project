import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './dashboard.css'
import Home from './home'
import EditProfile from './editProfile'
import Profile from './profile'
import Help from './help'
import Logout from './logout'
import Signup from './signup'
import EmployeeList from './employeelist'
import Sidebar from '../components/sidebar'
import Addclient from './client/addclient'
import ClientList from './client/clientlist'
import EditClient from './client/editclient'
import Addproject from './project/addproject'
import EditProject from './project/editProject'
import Projectlist from './project/projectlist'
import Viewproject from './project/viewproject'
import Addtask from './task/addtask'
import TaskList from './task/tasklist'
import ViewTask from './task/viewTask'
import EditTask from './task/editTask'
import RejectedTask from './task/rejectedtask'
import AccetedList from './task/accetedList';
import WaitingList from './task/waitingList';
import OngoingProjectlist from './project/ongoingprojectlist';

const Dashboard = () => {

  const details = JSON.parse(localStorage.getItem('loginUser'));
  return (
    <div className="container">
      <BrowserRouter>
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="flex-item" >
          <p align="right">user :<b> {details.firstName} {details.lastName} </b> ({details.designation}) </p>
          <Switch>
            <Route path="/dashboard/home" component={Home} />
            <Route path="/dashboard/myprofile" component={Profile} />
            <Route path="/dashboard/editprofile" component={EditProfile} />
            <Route path="/dashboard/signup" component={Signup} />
            <Route path="/dashboard/help" component={Help} />
            <Route path="/dashboard/logout" component={Logout} />
            <Route path="/dashboard/addtask" component={Addtask} />
            <Route path="/dashboard/addproject" component={Addproject} />
            <Route path="/dashboard/addclient" component={Addclient} />
            <Route path="/dashboard/projectlist" component={Projectlist} />
            <Route path="/dashboard/ongoningprojects" component={OngoingProjectlist} />
            <Route path="/dashboard/viewproject" component={Viewproject} />
            <Route path="/dashboard/editproject" component={EditProject} />
            <Route path="/dashboard/clientlist" component={ClientList} />
            <Route path="/dashboard/editclient" component={EditClient} />
            <Route path="/dashboard/tasklist" component={TaskList} />
            <Route path="/dashboard/viewtask" component={ViewTask} />
            <Route path="/dashboard/edittask" component={EditTask} />
            <Route path="/dashboard/rejectedtask" component={RejectedTask} />
            <Route path="/dashboard/acceptedlist" component={AccetedList} />
            <Route path="/dashboard/waitingdlist" component={WaitingList} />
            <Route path="/dashboard/employeelist" component={EmployeeList} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Dashboard