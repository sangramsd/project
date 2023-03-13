
import { Link } from 'react-router-dom'
import { url } from '../commons/constants'
import './signup.css'

const Profile = () => {
  const emp = JSON.parse(localStorage.getItem('loginUser'));
  let jDate = undefined
  let bDate = undefined
  // console.log("dept==>"+emp.dept)
  if (emp.joinDate != null) {
    jDate = emp.joinDate.substring(0, 10);
  }
  if (emp.birthDate != null) {
    bDate = emp.birthDate.substring(0, 10);
  }

  return (
    <div className="cardSignup">
      <table class="table table-success table-striped">
        <tbody>
          <tr> <th scope="row" colSpan="3" ><center><h3>Employee Info</h3></center> </th> </tr>
          <tr> <td scope="row" colSpan="2">
            <img src={url + '/user/' + emp.profilePicture}
              alt="profile"
              className="thumbnail-sm" />
          </td> <td align="right" valign="middle">
              <Link to="/dashboard/editProfile" className="Link"><button className="btn btn-info">Edit Profile</button> </Link>
            </td> </tr>
          <tr> <th scope="row">Employee Id</th> <td>:-</td>  <td>{emp.empId} </td> </tr>
          <tr> <th scope="row">Name</th> <td>:-</td> <td>{emp.firstName} {emp.lastName}</td>  </tr>
          <tr> <th scope="row">Email</th> <td>:-</td> <td> {emp.email} </td> </tr>
          <tr> <th scope="row">Gender</th> <td>:-</td> <td> {emp.gender} </td> </tr>
          <tr> <th scope="row">Designation</th> <td>:-</td> <td> {emp.designation} </td> </tr>
          <tr> <th scope="row">Salary</th> <td>:-</td> <td> {emp.salary} </td> </tr>
          <tr> <th scope="row">Department Id</th> <td>:-</td> <td> {emp.dept.deptId} </td> </tr>
          <tr> <th scope="row">Birth Date</th> <td>:-</td> <td> {bDate} </td> </tr>
          <tr> <th scope="row">Join Date</th> <td>:-</td> <td> {jDate} </td> </tr>
          <tr> <th scope="row">Contact</th> <td>:-</td> <td> {emp.contact} </td> </tr>
          <tr> <th scope="row">Address</th> <td>:-</td> <td> {emp.address} </td> </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Profile
