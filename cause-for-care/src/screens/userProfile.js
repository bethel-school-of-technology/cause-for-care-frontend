import React from 'react';
import { Col, Row, Nav, Tab} from 'react-bootstrap';
import "./styles/user.css"

class User extends React.Component {
    render(){
        return(
                <div>
                <Tab.Container  defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link eventKey="first">Welcome</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">What's New</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <h3>Welcome User</h3>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         
          <h3>Here's What you've missed this week!</h3>
          <p>Blog feed from posts from organizations</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            </div>
        )
    }
}
export default User;