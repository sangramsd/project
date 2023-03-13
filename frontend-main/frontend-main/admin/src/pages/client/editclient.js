
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { url } from '../../commons/constants'
import '../signup.css'

const EditClient = () => {
  const [ClientName, setClientName] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [Location, setLocation] = useState('')

  const history = useHistory()
  const location = useLocation()
  const client = location.state.client

  useEffect(() => {
    console.log(`Profile component got loaded`)
    setData()
  }, [])

  const setData = () => {
    setClientName(client.cName)
    setCompanyName(client.cCompany)
    setEmail(client.cEmail)
    setContact(client.cContact)
    setLocation(client.cLocation)
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
    if (ClientName.length === 0) {
      alert('Enter Client Name')
    } else if (CompanyName.length === 0) {
      alert('Enter Company Name')
    } else if (email.length === 0) {
      alert('Enter Email')
    } else if (Location.length === 0) {
      alert('Enter Location')
    } else if (contact.length === 0) {
      alert('Enter Contact')
    } else if (!validateName(ClientName)) {
      alert('Invalid Client Name')
    } else if (!validateName(CompanyName)) {
      alert('Invalid Company Name')
    } else if (!validateContact(contact)) {
      alert('Invalid Contact Contact')
    } else if (!validateEmail(email)) {
      alert('Invalid Email')
    }
    else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()
      // add the data
      data.append('cId', client.cId)
      data.append('cName', ClientName)
      data.append('cCompany', CompanyName)
      data.append('cEmail', email)
      data.append('cLocation', Location)
      data.append('cContact', contact)

      // send the data to the API
      axios.post(url + '/admin/editclient', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('Edit Client Successful')
          history.push('/dashboard/clientlist')
        } else {
          alert('Something went wrong')
        }
      })
    }
  }

  return (
    <div class="cardSignup">
      <h2 align="center"> Edit Client </h2><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label"> Client Name</label><br></br>
          <input
            defaultValue={ClientName}
            onChange={(e) => {
              setClientName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Company Name</label><br></br>
          <input
            defaultValue={CompanyName}
            onChange={(e) => {
              setCompanyName(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label class="input-label">Email</label><br></br>
          <input
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
        <div className="col">
          <label class="input-label">Contact</label><br></br>
          <input
            defaultValue={contact}
            onChange={(e) => {
              setContact(e.target.value)
            }}
            type="text" className="form-control" />
        </div>
      </div><br></br>
      <div className="row">
        <div className="col">
          <label className="input-label">Location</label><br></br>
          <textarea
            defaultValue={Location}
            onChange={(e) => {
              setLocation(e.target.value)
            }}
            name="message" rows="8" className="form-control" />
        </div>
      </div>
      <br></br>
      <div className="mb-3" align="center">
        <button onClick={addUserToDB} className="btn btn-success">
          Update Client
        </button> <br></br><br></br>
        <Link to="/dashboard/clientlist" className="Link"><button className="btn btn-info">Back to Client</button> </Link>
        <br></br> <br></br>
      </div>
      <div className="container">
      </div>
    </div>
  )
}
export default EditClient
