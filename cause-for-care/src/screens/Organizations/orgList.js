import React from 'react';

class OrgList extends React.Component {
    render(){
        return (
            <div>
                <h1>Organizations</h1>
                <ul>
                    <li>
                        <a href="/organization">The Society for Mini Horses</a>
                    </li>
                </ul>
            </div>
        )
    }
    
    
    
    /*state={
        org: [],
        errs: false
    }
    async componentDidMount() {
        fetch('https://us-central1-cause-for-care.cloudfunctions.net/api/org',{
        method: 'get'
    }).then(res => res.json())
    .then(res=> this.setState({org: res}))
    .catch(() => this.setState({errs: true}))
    }
    render(){
        return (
            <div>
                {this.state.org.map(org => (
                    <div key={org.orgHandle}>
                        <div>{org.orgHandle}</div>
                    </div>
                ))}
            </div>
        )
    }*/
}
export default OrgList;