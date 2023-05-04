import React from 'react';
import SingleChef from '../SingleChef/SingleChef';
import { Col, Container, Row } from 'react-bootstrap';

const AllCards = ({ chefData }) => {
    return (
        <Container className='mx-auto'>
            <h2 className='pop-font pt-4 fw-bold'>Our chefs</h2>
            <h3 className='os-font text-success'>Meet our skilled chefs</h3>
            <Row className='mt-4 mb-4'>
                {
                    chefData.map((data) => <Col
                        xs={12} md={6} lg={4}
                        data-aos="zoom-in"
                        data-aos-easing="ease-in"
                        data-aos-duration="500"
                        >
                        <SingleChef
                            key={data.chefId}
                            data={data} />
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default AllCards;