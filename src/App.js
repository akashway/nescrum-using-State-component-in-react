import './App.css';
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import AddDashboard from './components/AddDashboard'
import ForgetPassword from './components/ForgetPassword';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const localStorageObject={
    userName:"",
    firstTimeUser:"",
    userEmail:"",
    feedbackResponse:"",
    addFeedbackResponse:"",
    token:"",
    success:""
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={(props) => (<RegistrationPage localStorageObject={localStorageObject} {...props}/>)}/>
          <Route path="/login" exact render={(props) => (<LoginPage localStorageObject={localStorageObject} {...props}/>)} />
          <Route path="/dashboard" exact render={(props) => (<Dashboard localStorageObject={localStorageObject} {...props}/>)}/>
          <Route path="/adddashboard" exact render={(props) => (<AddDashboard localStorageObject={localStorageObject} {...props}/>)}/>
          <Route path="/forgetpassword" exact component={ForgetPassword}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
