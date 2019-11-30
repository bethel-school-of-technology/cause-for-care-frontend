import React from 'react';
import "../App.css"
import { Tab, Row, Nav, Col} from 'react-bootstrap';
import Blogpost from '../comp/blog/blogPost';
import Jobapp from '../comp/jobApp';

class UVOrgan extends React.Component {
    render(){
        return(
            <div>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Welcome</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">What You've Missed</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Apply</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h3>Welcome</h3>
                                <p>Organization description</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Blogpost />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Jobapp />
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default UVOrgan;