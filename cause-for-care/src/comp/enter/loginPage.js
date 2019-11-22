import React from "react";
import {Tab, Tabs} from 'react-bootstrap';
import Login from "./userLogin";
import OrgLogin from "./orgLogin";

class LoginPage extends React.Component {
    render() {
        return(
            <div>
                <Tabs>
                    <Tab eventKey='login' title='Login'>
                        <Login />
                    </Tab>
                    <Tab eventKey='orgns' title='Organizations'>
                        <OrgLogin />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
export default LoginPage;