import React from 'react';
import Showslide from '../../comp/slideShow';

class Orgwelcome extends React.Component {
    render(){
        return (
            <div>
                <h1>We are SoMH!</h1>
                <div>
                <Showslide />
                <br />
                    <h4>About Us</h4>
                    <p className="body">
                        When most people think of Miniture Horses they don't commonly think of them as a Service Animals. 
                        When in reality, Minis possess a sweet-natured attuitude and are know for their
                        intelegence which make them an excellent Service Animal. We here at 
                        The Society of Mini Horses are here to help you connect with Service Horse trainers and sellers. When you connect
                        with us here at SoMH we will help you to connect with other Service Horse owners as well as provice educational
                        expirences for how to better care for your companion buddy 
                    </p>
                </div>
                
            </div>
        )
    }
    /*state={
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
    }*/
}
export default Orgwelcome;