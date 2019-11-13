import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../../screens/home";
import User from '../../screens/userProfile';
import Organ from '../../screens/organization';
import Jobboard from '../../screens/jobboard';
import Signup from '../../screens/signup';
import Jobapp from '../jobApp';
import Login from '../../screens/login';


class Navigation extends React.Component {
  render() {
    return (
      <Router >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Cause for Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/organization">Organization</Nav.Link>
              <Nav.Link href="/Jobboard">job board</Nav.Link>
            </Nav>
            <Nav>
              <Button href="/login">Login</Button>
              <Button variant="success" href="/signup">Signup</Button>
              <Form inline>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={User} />
        <Route path="/organization" component={Organ} />
        <Route path="/Jobboard" component={Jobboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/jobapp" component={Jobapp} />
      </Router>
    );
  }
}
export default Navigation;
