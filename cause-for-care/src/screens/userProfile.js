import React from 'react';
import { Col, Row, Nav, Tab} from 'react-bootstrap';
import "./styles/user.css"
import Blogposts from '../comp/blog/blogPosts';
import Orglist from '../screens/Organizations/orgList';

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
          <Nav.Link eventKey="second">Look for More</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h1>Welcome</h1>        
          <h3>Here's What you've missed this week!</h3>
         <Blogposts />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        < Orglist />
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