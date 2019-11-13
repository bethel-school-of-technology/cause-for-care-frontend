import React from 'react';
import "../App.css"


class Jobboard extends React.Component {

    state = {
        loading: true,
        messages: null
    }
    async componentDidMount() {
        const url = 'http://localhost:5001/cause-for-care/us-central1/api/messages';
        const response = await fetch(url, {
            mode: 'cors'
        });
        const data = await response.json();
        this.setState({ messages: data[0], loading: false })
        // console.log(data[0]);
    }
    render() {
        return (
            <div>
                <h1>this should show jobs....</h1>
                <div>
                    {this.state.loading || !this.state.messages ? (
                        <div>getting stuff from server...</div>
                    ) : (
                            <ul>
                                <div>{this.state.messages.body}</div>
                            </ul>
                        )}
                </div>
            </div>
        )
    }
}

export default Jobboard;