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
            <Carousel.Item interval={500}>

                <div className='my-5 d-flex flex-column flex-md-row align-items-center justify-content-center banner-carousel'>
                    <Row>
                        <Col xs={4} md={12}>
                            <img className='' src={chefPng1} alt="" />
                        </Col>

                    </Row>
                    <div>
                        <h1 className='logo fw-bold band-color text-lg text-end'>Welcome to the universe of <br /> <span>dalicious recipies</span></h1>
                        <p className='band-secondary text-sm-end me-0'>Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos, cooking has never been more enjoyable. Start exploring now and let's cook up something amazing together!</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <div className="my-5 d-flex flex-column flex-md-row align-items-center justify-content-center banner-carousel">
                    <div>
                        <h1 className='logo fw-bold band-color text-lg text-start'>Welcome to the universe of <br /> <span>dalicious recipies</span></h1>
                        <p className='band-secondary text-sm-start'>Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos, cooking has never been more enjoyable. Start exploring now and let's cook up something amazing together!</p>
                    </div>
                    <Row>
                        <Col xs={4} md={12}>
                            <img className='' src={chefPng2} alt="" />
                        </Col>
                    </Row>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <div className="my-5 d-flex flex-column flex-md-row align-items-center justify-content-center banner-carousel">
                    <Row>
                        <Col xs={4} md={12}>
                            <img className='' src={chefPng3} alt="" />
                        </Col>
                    </Row>
                    <div>
                        <h1 className='logo fw-bold band-color text-lg text-end'>Welcome to the universe of <br /> <span>dalicious recipies</span></h1>
                        <p className='band-secondary text-sm-end me-0'>Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos, cooking has never been more enjoyable. Start exploring now and let's cook up something amazing together!</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;