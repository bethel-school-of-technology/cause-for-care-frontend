import React from "react";
import { Button, Form } from "react-bootstrap";
import '../../screens/styles/login.css'
class Login extends React.Component {
    render() {
        return(
            <Form id="login"s>
              <div>
                <label htmlFor="name">Username</label>
                <input type="text" name='username' required />
              </div>
              <div>
                <label htmlFor="name">Password</label>
                <input type='password' name="password" required />
              </div>
              <div>
                <Button variant="danger" href="/profile">Login</Button>
              </div>
          </Form>
        )
    }
}

export default Login;
