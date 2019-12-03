import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../../screens/home";
import User from '../../screens/userProfile';
import UVOrgan from '../../screens/organUView';
import Signup from '../../screens/signup';
import Jobapp from '../jobApp';
import LoginPage from '../../screens/loginPage';
import Organ from '../../screens/Organizations/organization';
import OrgList from '../../screens/Organizations/orgList'
class Navigation extends React.Component {
    render(){
  return (
    <Router >
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Cause for Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/orgList">Organization</Nav.Link>
    </Nav>
    <Nav>
      <Button variant="danger" href="/login">Login</Button>
      <Button variant="warning" href="/signup">Signup</Button>
    <Form inline>
    </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<hr />
<Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile" component={User} />
      <Route path="/orgList" component={OrgList} />
      <Route path="/organization" component={UVOrgan} />
      <Route path="/signup" component={Signup} />
      <Route path="/jobapp" component={Jobapp} />
      <Route path="/organization-profile" component={Organ}/>
</Router>
);
    }
}
export default Navigation;
