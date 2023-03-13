import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../commons/constants'
import './signup.css'

const EditProfile = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [contact, setContact] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [address, setAddress] = useState('')
  const [securityQuestion, setSecurityQuestion] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  const history = useHistory()
  const emp = JSON.parse(localStorage.getItem('loginUser'));

  useEffect(() => {
    console.log(`Profile component got loaded`)
    setData()
  }, [])

  const setData = () => {
    setFirstName(emp.firstName)
    setLastName(emp.lastName)
    setEmail(emp.email)
    setGender(emp.gender)
    setContact(emp.contact)
    setBirthDate(emp.birthDate)
    setAddress(emp.address)
    setSecurityQuestion(emp.securityQuestion)
  }

  const onFileSelect = (event) => {
    setProfilePicture(event.target.files[0])
  }

  const validateName = (name) => {
    const re = /^[A-Za-z\s]+$/
    return re.test(name);
  }

  const validateContact = (contact) => {
    const re = /^[0-9]{10}$/;
    return re.test(contact);
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
    } else if (gender.length === 0) {
      alert('Enter gender')
    } else if (contact.length === 0) {
      alert('Enter contact')
    } else if (address.length === 0) {
      alert('Enter address')
    } else if (birthDate.length === 0) {
      alert('Enter birthDate')
    } else if (securityQuestion.length === 0) {
      alert('Enter securityQuestion')
    } else if (!validateName(LastName)) {
      alert('Invalid Last Name')
    } else if (!validateName(FirstName)) {
      alert('Invalid First Name')
    } else if (!validateContact(contact)) {
      alert('Invalid Contact Number')
    } else if (!validateEmail(email)) {
      alert('Invalid Email')
    }
    else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()
      // console.log("inside method " + birthDate)
      // add the data
      data.append('firstName', FirstName)
      data.append('lastName', LastName)
      data.append('email', email)
      data.append('gender', gender)
      data.append('contact', contact)
      data.append('birthDate', birthDate)
      data.append('address', address)
      data.append('securityQuestion', securityQuestion)

      // send the data to the API
      axios.post(url + '/user/profile', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('Edit Profile Successful')
          // console.log("response B date" + result.data.birthDate)
          localStorage.setItem('loginUser', JSON.stringify(result.data));
          history.push('/dashboard/myprofile')
        } else {
          alert('Something went wrong')
        }
      })
    }
  }

  const addProfilePicture = () => {
    if (profilePicture.length === 0) {
      alert('Select Profile Picture')
    } else {
      const data = new FormData()
      data.append('email', email)
      data.append('profilePic', profilePicture)

      axios.post(url + '/user/profilepicture', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('Edit Profile Successful')
          localStorage.setItem('loginUser', JSON.stringify(result.data));
        } else {
          alert('Something went wrong')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <h2 align="center"> Edit Profile </h2><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Profile</label><br></br>
          <div className="btn-flex">
            <input
              accept="image/*"
              onChange={onFileSelect}
              type="file"
              className="form-control" /> &nbsp;&nbsp;&nbsp;
            <button onClick={addProfilePicture} className="btn btn-info" >Update</button>
          </div>
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label"> First Name</label><br></br>
          <input
            defaultValue={FirstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Last Name</label><br></br>
          <input
            defaultValue={LastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label">What is yout favorite place?</label><br></br>
          <input
            defaultValue={securityQuestion}
            onChange={(e) => {
              setSecurityQuestion(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Email</label><br></br>
          <input
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col" >
          <label className="input-label">Gender</label><br></br>
          <select
            defaultValue={gender}
            onChange={(e) => {
              setGender(e.target.value)
            }} className="form-control" >
            <option value={gender}>{gender} (current value) </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col" >
          <label class="input-label">Contact</label><br></br>
          <input
            defaultValue={contact}
            onChange={(e) => {
              setContact(e.target.value)
            }}
            type="number" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Birth Date</label><br></br>
          <input
            defaultValue={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value)
            }}
            type="date" className="form-control" />
        </div>
        <div className="col">
          <label className="input-label">Address</label><br></br>
          <input
            defaultValue={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="mb-3" align="center">
        <button onClick={addUserToDB} className="btn btn-success">
          Update Profile
        </button> &nbsp;&nbsp;&nbsp;
        <Link to="/dashboard/myprofile" className="Link"><button className="btn btn-info">Back to Profile</button> </Link>
        <br></br> <br></br>
      </div>
      <div className="container">
      </div>
    </div>
  )
}
export default EditProfile