import React from 'react';
import {Button, Form, Col} from 'react-bootstrap'

const Orgsign = () => {
  <div>
    <OrgSignUp />
  </div>
}
const INITIAL_STATE = {
  orgHandle: "",
  email: "",
  password: "",
  cause: "",
  Location: "",
  error: null,
};
 
    class OrgSignUp extends React.Component {
        constructor (props) {
          super(props);
          this.state = { ...INITIAL_STATE };
        }
        onSubmit = event => {
          const {orgHandle, email, pasword, cause, location }=this.state

          this.props.firebase
          .doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            this.setState({ ...INITIAL_STATE});
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
            <input
            name="orgHandle"
            value={orgHandle}
            onChange={this.onChange}
            type="text"
            required
            >Organization Name:</input>

            <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            required
            ></input>

            <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            required
            >Password</input>

            <input
            name="cause"
            value={cause}
            onChange={this.onChange}
            type="text"
            required
            ></input>

            <input
            name="location"
            value={location}
            onChange={this.onChange}
            type="text"
            required
            ></input>
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
  
  export default Orgsign;
  export {OrgSignUp};