import React from 'react';
import Jobapp from './jobApp';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button} from 'react-bootstrap'

class User extends React.Component {
    render(){
        return(
            <div>
            <div>
                <h2>Welcome User</h2>
                <Button href="/jobApp">Apply</Button>
                <h3>Here's What you've missed this week!</h3>
                <p>Blog feed from posts from organizations</p>
            </div>
            <Router>
                <Route path="/jobApp" component={Jobapp} />
            </Router>
            </div>
        )
    }
}
export default User;