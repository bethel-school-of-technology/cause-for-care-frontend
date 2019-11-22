import React from 'react';
import "../../App.css"
import { Tab, Row, Nav, Col} from 'react-bootstrap';
import Blogposts from '../../comp/blog/blogPosts';
import JobappView from './jobApps';
import Showslide from '../../comp/slideShow'

class Organ extends React.Component {
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
                                    <Nav.Link eventKey="second">Post an Update</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">View Applications</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h3>Welcome</h3>
                                <p>Organization description</p>
                                <Showslide />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Blogposts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <JobappView />
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Organ;