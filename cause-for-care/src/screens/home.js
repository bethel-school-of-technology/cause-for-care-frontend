import React from 'react';
import "../App.css";
import {Col, Row, Container} from 'react-bootstrap';

class Home extends React.Component {
    render(){
        return (
<div>
    <Container>
        <Row>
    <Col>
    <h2>Cause for Care</h2>
    </Col>
    </Row>
    <Row>
    <Col>Our Mission Statement</Col>
    <Col>We are dedicated to helping Organizations, big or small, connect with the world around them. We are also dedicated to
        helping people like you discover a need in your community and world.
    </Col>
    </Row>
    </Container>
</div>
)
        }
    }



export default Home;