import React from 'react';
import "./styles/home.css";
import {Col, Row, Container} from 'react-bootstrap';
import ShowSlide from '../comp/slideShow';

class Home extends React.Component {
    render(){
        return (
<div>
    <Container>
    <Row>
    <Col>Our Mission Statement</Col>
    <Col>We are dedicated to helping Organizations, big or small, connect with the world around them. We are also dedicated to
        helping people like you discover a need in your community and world
    </Col>
    <Col>
    <img src="https://making-the-web.com/sites/default/files/clipart/135711/helping-people-135711-2101812.png" alt="random pic" className="responsive"/>
    </Col>
    </Row>
    </Container>
    <ShowSlide />
</div>
)
        }
    }



export default Home;