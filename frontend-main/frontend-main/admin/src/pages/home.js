import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../commons/constants'
import './home.css'

const Home = () => {
  const [count, setCount] = useState('')

  useEffect(() => {
    console.log(`Home component got loaded`)
    getCount()
  }, [])

  const getCount = () => {
    axios.get(url + '/admin/getcount').then((response) => {
      const result = response.data
      console.log(result);
      if (result.status === 'success') {
        setCount(result.data)
        // console.log(result.data)
      } else {
        alert('error while loading count')
      }
    })
  }

  return (
    <div>
      <div className="mb-3"></div>
      <h2>Project</h2>
      <hr />
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{count.allProject}</h3>
              <p>All Project</p>
            </div>
            <Link to="/dashboard/projectlist" className="small-box-footer nav-link">More Info </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>{count.ongonigProject}</h3>
              <p>Project In Progress</p>
            </div>
            <Link to="/dashboard/ongoningprojects" className="small-box-footer nav-link">More Info</Link>
          </div>
        </div>
      </div>
      <h2>Tasks</h2>
      <hr />
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{count.allTask}</h3>
              <p>All Task</p>
            </div>
            <Link to="/dashboard/tasklist" className="small-box-footer nav-link">More Info</Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>{count.acceptedTask}</h3>
              <p>Accepted List</p>
            </div>
            <Link to="/dashboard/acceptedlist" className="small-box-footer nav-link">More Info</Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{count.waitingTask}</h3>
              <p>Waiting List</p>
            </div>
            <Link to="/dashboard/waitingdlist" className="small-box-footer nav-link">More Info</Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>{count.rejectedTask}</h3>
              <p>Rejected List</p>
            </div>
            <Link to="/dashboard/rejectedtask" className="small-box-footer nav-link">More Info</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
