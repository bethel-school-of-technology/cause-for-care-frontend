import React from 'react';
import "./styles/jobApp.css"

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
      <form onSubmit={this.handleSubmit} className="apply">
   
        <br />
        <label for="org">Organazation Applying for: 
        <input type="text" name="org" required></input>
        </label>
        <br />
        <label>
          Name: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <label for="name">Last Name: 
        <input type="text" name="lname" required></input>
        </label>
        <br />
        <label for="birth">Birthdate
        <input type="text" name="birth" required></input>
        </label>
        <br />
        <label for="location">Address
        <input type="text" name="location" required></input>
        </label>
        <br />
        <label>
            Upload Resume:
            <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Apply</button>
        </form>
    </div>
        )
    };
}
export default Jobapp;