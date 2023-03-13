import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../commons/constants'
import './signup.css'

const Signup = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')
  const [deptId, setDeptId] = useState('')
  const [managerId, setManagerId] = useState('')
  const [joinDate, setJoinDate] = useState('')
  const [depts, setDepts] = useState([])
  // get the history object
  const history = useHistory()

  useEffect(() => {
    console.log(`Depts component got loaded`)
    getDepts()
  }, [])

  const getDepts = () => {
    axios.get(url + '/depts').then((response) => {
      const result = response.data
      // console.log(result);
      if (result.status === 'success') {
        setDepts(result.data)
      } else {
        alert('error while loading list of Depts')
      }
    })
  }

  const managerSet = () => {
    if (deptId.length === 0) {
      alert('Select Department Id')
    } else {
      (depts).map((id) => {
        if (deptId == id.deptId)
          setManagerId(id.managerId)
        return null;
      })
    }
  }

  const validateName = (name) => {
    const re = /^[A-Za-z\s]+$/
    return re.test(name);
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const addUserToDB = () => {
    if (FirstName.length === 0) {
      alert('Enter First Name')
    } else if (LastName.length === 0) {
      alert('Enter Last Name')
    } else if (email.length === 0) {
      alert('Enter Email')
    } else if (password.length === 0) {
      alert('Enter Password')
    } else if (designation.length === 0) {
      alert('Enter designation')
    } else if (salary.length === 0) {
      alert('Enter salary')
    } else if (deptId.length === 0) {
      alert('Enter Dept Id')
    } else if (joinDate.length === 0) {
      alert('Enter joinDate')
    } else if (!validateName(LastName)) {
      alert('Invalid Last Name')
    } else if (!validateName(FirstName)) {
      alert('Invalid First Name')
    } else if (!validateEmail(email)) {
      alert('Invalid Email')
    } else if (managerId.length === 0) {
      alert('Enter Manager Id')
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()
      // add the data
      data.append('FirstName', FirstName)
      data.append('LastName', LastName)
      data.append('email', email)
      data.append('password', password)
      data.append('designation', designation)
      data.append('salary', salary)
      data.append('managerId', managerId)
      data.append('joinDate', joinDate)
      data.append('dept', deptId)

      // send the data to the API
      axios.post(url + '/user/signup', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('SignUp Successful')
          // go to SignIN page
          history.push('/signin')
        } else {
          alert('error while adding employee')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <h2 className="cardheading" align="center">Add New Employee</h2><br></br><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label"> Department </label><br></br>
          <select
            onChange={(e) => {
              setDeptId(e.target.value)
            }}
            className="form-control" >
            <option value=""> Select dept </option>
            {(depts).map((dept) => {
              return (
                <option value={dept.deptId}> {dept.deptId} {dept.deptName} </option>)
            })}
          </select>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label">First Name</label><br></br>
          <input
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Last Name</label><br></br>
          <input
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col" >
          <label className="input-label">Manager Id</label><br></br>
          <div className="btn-flex">
            <input
              type="number" value={managerId} className="form-control" />
            <button onClick={managerSet} className="btn btn-info"> Set </button>
          </div>
        </div>
        <div className="col" >
          <label class="input-label">Salary</label><br></br>
          <input
            onChange={(e) => {
              setSalary(e.target.value)
            }}
            type="number" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Join Date</label><br></br>
          <input
            onChange={(e) => {
              setJoinDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
        <div className="col">

          <label className="input-label">Designation</label><br></br>
          <select onChange={(e) => {
            setDesignation(e.target.value)
          }} className="form-control" >
            <option value="null">Null</option>
            <option value="analyst">Analyst</option>
            <option value="developer">Developer</option>
            <option value="tester">Tester</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="technician">Technician</option>
            <option value="accountant">Accountant</option>
          </select>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Email</label><br></br>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email" className="form-control" />
        </div>
        <div className="col" >
          <label class="input-label" htmlFor="">Password</label><br></br>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password" className="form-control" />
        </div>
      </div>
      <br></br>
      <div className="mb-3" align="center">
        <button onClick={addUserToDB} className="btn btn-success">
          Register
        </button><br></br><br></br>
        <Link to="/signin" className="Link"> SignIn
        </Link>
      </div>
    </div>
  )
}

export default Signup