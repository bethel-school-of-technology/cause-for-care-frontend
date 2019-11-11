import React from 'react';
import "./styles/jobApp.css"
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
        <h4>Working for an organization can be both benefitual and rewarding.
            
        </h4>
        <Form>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group as={Col} controlId="">
      <Form.Label>Upload Resume:</Form.Label>
      <input type="file" ref={this.fileInput} />
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
        )
    };
}
export default Jobapp;