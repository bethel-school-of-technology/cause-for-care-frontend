import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import "../screens/styles/showslide.css"

class Showslide extends React.Component {
    render() {
        return (
    <Carousel className="carousel" >
        <CarouselItem className="carousel-item">
            <img  src= 'https://making-the-web.com/sites/default/files/clipart/175744/images-people-helping-others-175744-8364596.jpg' alt="img1" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
            <img src='https://making-the-web.com/sites/default/files/clipart/135711/helping-people-135711-8204814.jpg' alt="img2"/>
        </CarouselItem>
        <CarouselItem className="carousel-item">
            <img src='https://making-the-web.com/sites/default/files/clipart/135711/helping-people-135711-4731725.jpg' alt='img3' />
        </CarouselItem>
    </Carousel>
        )}}

export default Showslide;