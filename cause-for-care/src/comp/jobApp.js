import React from 'react';
import "../screens/styles/user.css"
import { Form, Col, Button} from 'react-bootstrap'

class Jobapp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
        this.fileInput = React.createRef();
    }

        handleChange(event) {
            this.setState({value: event.target.value});
        }
    
       handleSubmit(event) {
            alert("Congratulations! You've applied");
            event.preventDefault();
        }

  render() {
    return (
    <div>
      <h2>Welcome!</h2>
      <p>
        Have you ever wanted to make a difference in your community? Apply now to help change the world around you.
      </p>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="name">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="name2">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="phoneNumber"></Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" required />
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="email"></Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="">
            <Form.Label>Upload Resume:</Form.Label>
            <input type="file" ref={this.fileInput} />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div> 
  )};
}
export default Jobapp;