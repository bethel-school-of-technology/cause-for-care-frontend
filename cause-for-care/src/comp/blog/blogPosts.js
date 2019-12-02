import React from 'react';
import "../../screens/styles/blogposts.css"

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
                <div className="body">
                    <div>{orgUpdates.title}</div>
                    <div>{orgUpdates.body}</div>
                    <div className="orgHandle">-{orgUpdates.orgHandle}</div>
                </div>
            </div>
            ))}
            </div>
        )}}
export default Blogposts;