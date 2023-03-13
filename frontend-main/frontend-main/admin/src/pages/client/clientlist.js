import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../commons/constants'

const ClientList = () => {
  // maintain the state
  const [clients, setClients] = useState([])

  useEffect(() => {
    console.log(`Client component got loaded`)
    getClients()
  }, [])

  const history = useHistory()

  const getClients = () => {
    axios.get(url + '/admin/getclient').then((response) => {
      const result = response.data
      // console.log(result);
      if (result.status === 'success') {
        setClients(result.data)
        // console.log(result.data)
        // localStorage.setItem('clientList', JSON.stringify(result.data));
      } else {
        alert('error while loading list of client')
      }
    })
  }

  return (
    <div>
      <h1 className="page-title">Clients</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Client Name</th>
            <th>Company </th>
            <th>Email</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            // { console.log(client.cId) }
            // { console.log(client.cName) }
            // { console.log(client.cEmail) }
            return <tr>
              <td>{client.cId}</td>
              <td>{client.cName} </td>
              <td>{client.cCompany}</td>
              <td>{client.cEmail}</td>
              <td>{client.cContact}</td>
              <td>{client.cLocation}</td>
              <td> <button
                onClick={() => {
                  history.push('/dashboard/editclient', { client: client })
                }}
                className="btn btn-success btn-sm">
                Edit
              </button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ClientList
