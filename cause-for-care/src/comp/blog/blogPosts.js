import React from 'react';

class Blogposts extends React.Component {
    state = {
        orgUpdates: [],
        errs: false
    };
    async componentDidMount() {
        fetch('https://us-central1-cause-for-care.cloudfunctions.net/api/orgUpdates', {
            methed: 'get'
        }).then(res => res.json())
        .then(res => this.setState({orgUpdates: res}))
        .catch(() => this.setState({ errs: true }));
    }
    render(){
        return(
            <div>
                {this.state.orgUpdates.map(orgUpdates => (
            <div key={orgUpdates.messageId}>
                <div>{orgUpdates.title}</div>
                <div>{orgUpdates.body}</div>
                <div>-{orgUpdates.orgHandle}</div>
            </div>
            ))}
            </div>
        )}}
export default Blogposts;