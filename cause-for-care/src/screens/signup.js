import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Login from './login';

class Signup extends React.Component {
    render(){
        return (
    <div>
    <h3>Welcome!</h3>
    <form>
        <label for="name">First Name:</label>
        <input type="text" name="fname" required></input>
        <br></br>
        <label for="name">Last Name:</label>
        <input type="text" name="lname" required></input>
        <br></br>
        <label for="email">Email:</label>
        <input type="text" name="email" required></input>
        <br></br>
        <label for="password">Password:</label>
        <input type="text" name="password" required></input>
        <br></br>
        <Button type="submit" href="/login">Sign up!</Button>
    </form>
    <Router>
        <Route path="/login" component={Login} />
    </Router>
    
</div>
);
};}

export default Signup;