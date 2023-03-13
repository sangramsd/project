import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'

const Addclient = () => {
  const [clientName, setClientName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')

  // get the history object
  const history = useHistory()

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
    if (clientName.length === 0) {
      alert('Enter Client Name')
    } else if (company.length === 0) {
      alert('Enter Company Name')
    } else if (email.length === 0) {
      alert('Enter Email')
    } else if (contact.length === 0) {
      alert('Enter Contact')
    } else if (location.length === 0) {
      alert('Enter location')
    } else if (!validateName(clientName)) {
      alert('Invalid client Name')
    } else if (!validateName(company)) {
      alert('Invalid company Name')
    } else if (!validateEmail(email)) {
      alert('Invalid Email')
    } else if (!validateContact(contact)) {
      alert('Invalid Contact')
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()
      // add the data
      data.append('cName', clientName)
      data.append('cCompany', company)
      data.append('cEmail', email)
      data.append('cContact', contact)
      data.append('cLocation', location)

      // send the data to the API
      axios.post(url + '/admin/addclient', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('client Added Successful')
          // go to SignIN page
          history.push('/dashboard/home')
        } else {
          alert('error while adding client')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <div className="row">
        <h2><center> Add Client </center> </h2>
        <div className="col">
          <label class="input-label">Client Name</label><br></br>
          <input
            onChange={(e) => {
              setClientName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Client Company Name</label><br></br>
          <input
            onChange={(e) => {
              setCompany(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col" >
          <label className="input-label">Client Email</label><br></br>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col" >
          <label class="input-label">Client Contact</label><br></br>
          <input
            onChange={(e) => {
              setContact(e.target.value)
            }}
            type="number" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Location</label><br></br>
          <input
            onChange={(e) => {
              setLocation(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div>
      <br></br>
      <div className="mb-3" align="center">
        <button onClick={addUserToDB} className="btn btn-success">
          Add Client
        </button><br></br><br></br>
      </div>
    </div>
  )
}

export default Addclient