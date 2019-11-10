import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./screens/home";
import User from './screens/userProfile';
import Organ from './screens/organization';
import Signup from './screens/signup';
import Jobapp from './screens/jobApp';
import Login from './screens/login';


function App() {
  return (
    <Router >
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Cause for Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/organization">Organization</Nav.Link>
    </Nav>
    <Nav>
      <Button href="/login">Login</Button>
      <Button variant="success" href="/signup">Signup</Button>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<hr />
<Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={User} />
      <Route path="/organization" component={Organ} />
      <Route path="/signup" component={Signup} />
      <Route path="/jobapp" component={Jobapp} />
</Router>
);
    }

export default App;
