import React from 'react';
import {Button, Form, Col} from 'react-bootstrap'


 
    class SignUpForm extends React.Component {
        render(){
  
    return (
      <Form>
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
      </Form>
    );
    }
  }
  
  export default SignUpForm;