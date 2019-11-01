import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./screens/home";
import Login from './screens/login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './screens/userProfile';
import Organ from './screens/organProfile';

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
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={User} />
      <Route path="/organization" component={Organ} />
    </div>
  </Router>
);


ReactDOM.render(<App />, document.getElementById('root'));