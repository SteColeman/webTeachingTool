import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import LearnerInterface from './components/LearnerInterface/LearnerInterface';

function App() {

  return(
    
    <div>
      <Router>
        <Link to="/login">Login</Link>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>

      <LearnerInterface />

    </div>

  )

}

export default App;

