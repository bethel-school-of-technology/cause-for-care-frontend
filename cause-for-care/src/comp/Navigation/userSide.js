import React from 'react';
import {Row, Col, Nav, Tab} from 'react-bootstrap'


class UserSide extends React.Component {
    render(){
        return(
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Welcome</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Organizations</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <h3>Welcome User</h3>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <orgList />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        )
    }
}

export default UserSide;