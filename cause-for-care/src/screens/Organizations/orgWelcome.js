import React from 'react';

class Orgwelcome extends React.Component {
    state={
        org: [],
        errs: false
    }
    async componentDidMount() {
        fetch('https://us-central1-cause-for-care.cloudfunctions.net/api/org', {
            method: 'get'
    }).then(res => res.json())
    .then(res => this.setState({org: res}))
    .catch(() => this.setState({ errs: true}))
    }
    render(){
        return(
            <div>
                {this.state.org.map(org => (
                    <div key={org.orgHandle}>
                        <div>
                            <h1>Welcome {org.orgHandle}</h1>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Orgwelcome;