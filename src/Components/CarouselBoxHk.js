import React, {Component} from 'react';
import WatImg from '../assets/&&.png';
import Num27Img from '../assets/NC_27.svg.png';
import Num91Img from '../assets/US_91.svg.png';

import {Carousel} from "react-bootstrap";
class CarouselBoxHk extends Component{

render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Num27Img} alt="Num27Img"/>
                <Carousel.Caption>
                    <h3>Num27Img</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Num91Img} alt="Num91Img"/>
                <Carousel.Caption>
                    <h3>Num91Img</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={WatImg} alt="WatImg"/>
                <Carousel.Caption>
                    <h3>WatImg</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
} export default CarouselBoxHk;