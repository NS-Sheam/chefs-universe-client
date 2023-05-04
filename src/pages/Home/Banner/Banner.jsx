import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import chefPng1 from "../../../assets/chefpng1.png"
import chefPng2 from "../../../assets/chefpng2.png"
import chefPng3 from "../../../assets/chefpng3.png"
import bannerImg from "../../../assets/head-banner.jpg"
import "./Banner.css";
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Carousel>
                <Carousel.Item interval={2000}>

                    <div className='pt-3 d-flex flex-column flex-md-row align-items-center justify-content-center banner-carousel'>
                        <Row>
                            <Col xs={8} md={12}>
                                <img className='d-none d-md-block' src={chefPng1} alt="" />
                                <img className='w-50 d-md-none' src={chefPng1} alt="" />
                            </Col>

                        </Row>
                        <div className='px-2 px-md-4 py-2'>
                            <h1 className='fw-bold text-white text-end'>Welcome to the universe of <br /> <span>dalicious recipies</span></h1>
                            <p className='text-white text-end me-0'>Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos, cooking has never been more enjoyable. Start exploring now and let's cook up something amazing together!</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>

                    <div className='pt-3 d-flex flex-column flex-md-row align-items-center justify-content-center banner-carousel'>

                        <div className='px-2 px-md-4 py-2'>
                            <h1 className='fw-bold text-white text-lg text-start'>Welcome to the universe of <br /> <span>dalicious recipies</span></h1>
                            <p className='text-white text-start me-0'>Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos, cooking has never been more enjoyable. Start exploring now and let's cook up something amazing together!</p>
                        </div>
                        <Row>
                            <Col xs={8} md={12}>
                                <img className='d-none d-md-block' src={chefPng2} alt="" />
                                <img className='w-50 d-md-none' src={chefPng2} alt="" />
                            </Col>

                        </Row>
                    </div>
                </Carousel.Item>
            </Carousel>
            </Container>
        </div>
    );
};

export default Banner;