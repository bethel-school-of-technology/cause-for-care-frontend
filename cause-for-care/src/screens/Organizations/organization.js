import React from 'react';
import "../../App.css"
import { Tab, Row, Nav, Col} from 'react-bootstrap';
import Blogpost from '../../comp/blog/blogPost';
import Showslide from '../../comp/slideShow'
import Blogposts from '../../comp/blog/blogPosts';
import Jobboard from '../../comp/jobApp';
import Orgwelcome from './orgWelcome';

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
                                    <Nav.Link eventKey="third">View Job Postings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h3>Welcome</h3>
                                <p>Organization description</p>
                                <Showslide />
                                <Orgwelcome />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Blogpost />
                                <Blogposts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Jobboard />
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