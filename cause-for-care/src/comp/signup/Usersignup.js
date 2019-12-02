import React from 'react';
import {Button, Form} from 'react-bootstrap'
import { withFirebase } from '../Firebase';
import { compose } from 'recompose'

const UserSign = () => (
  <div>
    <UserSignup />
  </div>
)

const INITIAL_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  userHandle: "",
  erro: null,
}
 
class UserSignupBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE}
  } 
  onSubmit = event => {
    const {email, password, userHandle }=this.state
    
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, password, userHandle)
    .then(authUser => {
      this.setState({ ...INITIAL_STATE});
      this.props.history.push('/login')
    })
    .catch(error => {
      this.setState({error})
    });
    event.preventDefault();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  render(){
    const {
      userHandle,
      email,
      password,
      comfirmPassword,
      error,
    } = this.state
    const Nope =
    password !== comfirmPassword 
    return (
      <Form onSubmit={this.onSubmit}>
        
        <label htmlFor="userHandle">Username</label>
        <input
        name="userHandle"
        value={userHandle}
        onChange={this.onChange}
        type="text"
        required />
        
        <label htmlFor="email">Email</label>
        <input
        name="email"
        value={email}
        onChange={this.onChange}
        type="text"
        required
        ></input>

        <label htmlFor="password">Password</label>
        <input
        name="password"
        value={password}
        onChange={this.onChange}
        type="password"
        required />

        <label htmlFor="comfirmPassword">Comfirm Password</label>
        <input
        name="comfirmPassword"
        value={comfirmPassword}
        onChange={this.onChange}
        type="password"
        required />

        <Button disabled={Nope} type="submit">Sign Up</Button>
        <a href='/login'>Already have an account?</a>
        {error && <p>{error.message}</p>}
      </Form>
   /* return (
      <Form method="POST">
          <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col}  controlId="pass" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Form.Row>
        
        <Form.Row>
          <Form.Group as={Col} controlId="address"></Form.Group>
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="text" />
        </Form.Row>
      
        <Form.Row>
          <Form.Group as={Col} md="4" xs="4" controlId="location">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          
          <Form.Group as={Col} md="4" xs="4"controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>

          <Form.Group as={Col} md="4" xs="4" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
        </Form.Row>

        <Button type="submit" variant="dark" href="/login">Sign Up</Button>
        
        <a href='/login'>Already have an account?</a>
      </Form>*/
    );
    }
  }
  const UserSignup = compose(
    withFirebase)(UserSignupBase);
  
  export default UserSign;
  export { UserSignup }