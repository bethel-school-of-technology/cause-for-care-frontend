import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button, Container, Col, Row} from 'react-bootstrap'
import { Slide } from 'react-slideshow-image';
import "./styles/user.css"
import Jobapp from './jobApp';


 const slideImages = [
     'https://making-the-web.com/sites/default/files/clipart/175744/images-people-helping-others-175744-8364596.jpg',
     'https://making-the-web.com/sites/default/files/clipart/135711/helping-people-135711-8204814.jpg',
     'https://making-the-web.com/sites/default/files/clipart/135711/helping-people-135711-4731725.jpg'
 ]
 const properties = {
     duration: 5000,
     infinite: true,
     indicators: true,
     arrows: true,
     onChange: (oldIndex, newIndex) => {
         console.log(`slide transition from ${oldIndex} to ${newIndex}`)
     }
 }
class User extends React.Component {
    render(){
        return(
            <div>
            <Container>
                <Row>
                <Col>
                <h2>Welcome User</h2>
                <p>Apply now to meet a need in your area.</p>
                <Button href="/jobApp">Apply</Button>
                </Col>
                </Row>
            </Container>
            <Container>
                <h3>Here's What you've missed this week!</h3>
                <p>Blog feed from posts from organizations</p>
            </Container>
            <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
            <Router>
                <Route path="/jobApp" component={Jobapp} />
            </Router>
            </div>
        )
    }
}
export default User;