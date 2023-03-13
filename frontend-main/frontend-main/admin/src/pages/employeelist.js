import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../commons/constants'
import './cards.css'

const EmployeeList = () => {
  // maintain the state
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    console.log(`project component got loaded`)
    getEmployees()
  }, [])

  const getEmployees = () => {
    const data = new FormData()
    const emp = JSON.parse(localStorage.getItem('loginUser'));
    data.append('designation', emp.designation)
    data.append('managerId', emp.empId)
    axios.post(url + '/user/getemployees', data).then((response) => {
      const result = response.data
      console.log(result);
      if (result.status === 'success') {
        setEmployees(result.data)
        // console.log(result.data)
        // localStorage.setItem('EmployeesList', JSON.stringify(result.data));
      } else {
        alert('error while loading list of Employee')
      }
    })
  }

  return (
    <div className="card-project">
      <h1 className="page-title">Employee List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Join Date</th>
            <th>Dept Name</th>
            <th>Salary</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            // { console.log(employee.empId) }
            // { console.log(employee.firstName) }
            // { console.log(employee.joinDate) }
            return <tr>
              <td>{employee.empId}</td>
              <td>{employee.firstName} {employee.lastName} </td>
              <td>{employee.designation} </td>
              <td>{employee.gender}</td>
              <td>{employee.joinDate.substring(0, 10)}</td>
              <td>{employee.dept.deptName}</td>
              <td>{employee.salary}</td>
              <td>{employee.contact}</td>
              <td>{employee.address}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList
