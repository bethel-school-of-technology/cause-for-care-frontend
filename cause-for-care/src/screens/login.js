import React from 'react';
import "../App.css"
import User from './userProfile';
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom';


class Login extends React.Component {
    render(){
        return (
          <div>
   <form>
       <div className="container">
           <label for="uname">Username:</label>
           <input type="text" placeholder="Enter Username" name="uname" ></input>
           <br></br>
           <label for="pass">Password:</label>
           <input type="text" placeholder="Enter Password" name="pass" ></input>
            <br></br>
            <div>
            <Button href="/profile">Login</Button>
            </div>
       </div>
   </form>
       <Router>
       <Route path="/profile" component={User} />
      </Router>
      </div>
        );
    };
}

export default Login;