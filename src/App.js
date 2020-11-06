import './App.css';
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import AddDashboard from './components/AddDashboard'
import ForgetPassword from './components/ForgetPassword';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={RegistrationPage}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/adddashboard" exact component={AddDashboard}/>
          <Route path="/forgetpassword" exact component={ForgetPassword}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
