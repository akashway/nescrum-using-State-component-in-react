import './App.css';
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={RegistrationPage}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/dashboard" exact component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
