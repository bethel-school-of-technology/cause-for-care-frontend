import React from "react";
import { Button, Form } from "react-bootstrap";

class OrgLogin extends React.Component {
    render() {
        return(
            <Form>
              <div>
                <label htmlFor="name">Organzation Name</label>
                <input type="text" name="orgName" required />
              </div>
              <div>
                <label htmlFor="name">Password</label>
                <input type='password' name="password" required />
              </div>
              <div>
                <Button href="/organization-profile">Submit</Button>
              </div>
          </Form>
        )
    }
}
export default OrgLogin