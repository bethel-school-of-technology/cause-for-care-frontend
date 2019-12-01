import React from 'react';
import { withFirebase } from '../Firebase';
import {Button, Form} from 'react-bootstrap'
import {compose } from 'recompose';

const Orgsign = () => (
  <div>
    <OrgsignUp />
  </div>
);
const INITIAL_STATE = {
  orgHandle: "",
  email: "",
  password: "",
  cause: "",
  Location: "",
  error: null,
};
class OrgSignUpBase extends React.Component {
        constructor (props) {
          super(props);
          this.state = { ...INITIAL_STATE };
        }
        onSubmit = event => {
          const {orgHandle, email, password, cause, location }=this.state
          
          this.props.firebase
          .doCreateUserWithEmailAndPassword(orgHandle, email, password, cause, location)
          .then(authUser => {
            this.setState({ ...INITIAL_STATE});
            this.props.history.push('/profile')
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
          orgHandle,
          email,
          password,
          cause,
          location,
          error,
        } = this.state

        return (
          <Form onSubmit={this.onSubmit}>
            
            <label htmlFor="orgHandle">Organization Name</label>
            <input
            name="orgHandle"
            value={orgHandle}
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

            <label htmlFor="cause">Cause</label>
            <input
            name="cause"
            value={cause}
            onChange={this.onChange}
            type="text"
            required />

            <label htmlFor="location">Location</label>
            <input
            name="location"
            value={location}
            onChange={this.onChange}
            type="text"
            required />
            <Button type="submit">Sign Up</Button>

            {error && <p>{error.message}</p>}
          </Form>
      /*<Form method="POST">
          <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control type="text" />
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
  const OrgsignUp = compose(
  withFirebase)(OrgSignUpBase);
  
  export default Orgsign;
  export { OrgsignUp };