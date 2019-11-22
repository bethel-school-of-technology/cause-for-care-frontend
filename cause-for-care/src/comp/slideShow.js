import React from 'react';
import {Carousel, CarouselItem, Image} from 'react-bootstrap';


class Showslide extends React.Component {
    render() {
        return (
    <Carousel className="carousel" >
        <CarouselItem className="carousel-item">
            <Image  src= 'https://making-the-web.com/sites/default/files/clipart/175744/images-people-helping-others-175744-8364596.jpg' alt="img1" fluid/>
        </CarouselItem>
        <CarouselItem className="carousel-item">
            <Image src='https://making-the-web.com/sites/default/files/clipart/135711/helping-people-135711-8204814.jpg' alt="img2"fluid/>
        </CarouselItem>
        <CarouselItem className="carousel-item">
            <Image src='https://making-the-web.com/sites/default/files/clipart/135711/helping-people-135711-4731725.jpg' alt='img3' fluid />
        </CarouselItem>
    </Carousel>
        )}}

export default Showslide;