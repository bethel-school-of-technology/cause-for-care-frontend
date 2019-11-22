import React from 'react';
import '../App.css';

class Jobboard extends React.Component {
  state = {
    loading: true,
    messages: []
  };
  async componentDidMount() {
    const url = 'https://us-central1-cause-for-care.cloudfunctions.net/api/orgjobs';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({messages: data, loading: false});
  }
  render() {
    if (this.state.loading) {
      return <div>getting listings from FBDB...</div>;
    }
    if (!this.state.messages.length) {
      return <div> couldn't get listings</div>;
    }
    return (
      <div>
        <h1>this should show jobs....</h1>
        <div>
          {this.state.messages.map(message => (
            <div key={message.messageId}>
              <div>{message.body}</div>
              <div>{message.userHandle}</div>
              <div>{message.orgHandle}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobboard;
