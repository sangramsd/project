import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from './pages/signin'
import Forgotpassword from './pages/forgotpassword';
import Dashboard from './pages/dashboard';
import './App.css';


function App () {
  return (
    <div className="background">
      <br />
      <BrowserRouter>
      <div className="container">
      <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/signin" component={Signin} />
            <Route path="/forgetpassword" component={Forgotpassword} />
            <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </div>
      <br /><br />
      </BrowserRouter>
      </div>
  )
}

export default App;
