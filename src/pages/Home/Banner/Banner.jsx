import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import chefPng1 from "../../../assets/chefpng1.png"
import chefPng2 from "../../../assets/chefpng2.png"
import chefPng3 from "../../../assets/chefpng3.png"
import "./Banner.css";
import { Col, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>

                <div className='my-5 d-flex flex-column flex-md-row align-items-center justify-content-center banner-carousel'>
                    <Row>
                        <Col xs={3} md={12} >
                            <img className='d-none d-md-block' src={chefPng1} alt="" />
                            <img className='w-100 d-md-none' src={chefPng1} alt="" />
                        </Col>

                    </Row>
                    <div>
                        <h1 className='fw-bold band-color text-lg text-end'>Welcome to the universe of <br /> <span>dalicious recipies</span></h1>
                        <p className='band-color text-sm-end me-0'>Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos, cooking has never been more enjoyable. Start exploring now and let's cook up something amazing together!</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                
            <div className='my-5 d-flex flex-column flex-md-row align-items-center justify-content-center banner-carousel'>
                    <Row>
                        <Col xs={3} md={12}>
                            <img className='d-none d-md-block' src={chefPng2} alt="" />
                            <img className='w-100 d-md-none' src={chefPng2} alt="" />
                        </Col>

                    </Row>
                    <div>
                        <h1 className='fw-bold band-color text-lg text-end'>Welcome to the universe of <br /> <span>dalicious recipies</span></h1>
                        <p className='band-color text-sm-end me-0'>Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos, cooking has never been more enjoyable. Start exploring now and let's cook up something amazing together!</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;