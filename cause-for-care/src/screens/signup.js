import React from 'react';
import SignUpForm from '../comp/signup/Usersignup';
import Orgsign from '../comp/signup/Orgsignup';
import {Tabs, Tab} from 'react-bootstrap'

class Signup extends React.Component {
    render(){
        return (
            <div>
                <div>
                <Tabs>
                    <Tab eventKey='login' title='Login'>
                         <SignUpForm />
                    </Tab>
                    <Tab eventKey='orgns' title='Organizations'>
                        <Orgsign />
                    </Tab>
                </Tabs>
            </div>
            </div>
);
};}

export default Signup;