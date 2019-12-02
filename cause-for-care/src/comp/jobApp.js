import React from 'react';
import "../screens/styles/jobBoard.css";

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
      return <div>Fetching Available Positions...</div>;
    }
    if (!this.state.messages.length) {
      return <div> Couldn't get listings</div>;
    }
    return (
      <div>
        <h1>Available Positions</h1>
        <div>
          {this.state.messages.map(message => (
            <div key={message.messageId}>
              <div className='body'>
              <h5 className="messTitle">{message.title}</h5>
              <div className="messBody">{message.body}</div>
              <div className="messHandle">-{message.orgHandle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobboard;