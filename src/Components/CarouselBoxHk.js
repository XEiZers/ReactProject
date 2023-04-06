import React, { Component } from 'react';
import Course from '../assets/course.png';
import Developing from '../assets/developing.jpg';
import ReactJS from '../assets/react.jpg';
import { Carousel } from 'react-bootstrap';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Course}
                        alt="Course"
                    />
                    <Carousel.Caption>
                        <h3>Курси</h3>
                        <p>Розвивайся разом з іншими!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Developing}
                        alt="Developing"
                    />
                    <Carousel.Caption>
                        <h3>Програмування</h3>
                        <p>Створюй щось цікаве</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ReactJS}
                        alt="ReactJS"
                    />
                    <Carousel.Caption>
                        <h3>React</h3>
                        <p>Спробуй ReactJS!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        );
    }
}

export default CarouselBoxHk;