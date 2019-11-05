import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from "./screens/home";
import Login from './screens/login';
import User from './screens/userProfile';
import Organ from './screens/organProfile';
import Signup from './screens/signup';
import Jobapp from './screens/jobApp';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/organization">Organization</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={User} />
      <Route path="/organization" component={Organ} />
      <Route path="/signup" component={Signup} />
      <Route path="jobapp" component={Jobapp} />
    </div>
  </Router>
);


ReactDOM.render(<App />, document.getElementById('root'));