import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import LearnerInterface from './components/LearnerInterface/LearnerInterface';

function App() {
/**
 * return to the UI the learner interface component which contains all the other components
 * react router is used to add the tutor login component to the screen while adding a /login to the url
 */
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

