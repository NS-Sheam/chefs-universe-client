import React from 'react';
import SingleChef from '../SingleChef/SingleChef';
import { Col, Container, Row } from 'react-bootstrap';

const AllCards = ({ chefData }) => {
    return (
        <Container>
            <h2 className='py-4 fw-bold'>Our chef's</h2>
            <Row className='mt-4 mb-4'>
                {
                    chefData.map((data) => <Col
                        xs={12} md={6} lg={4}
                        data-aos="zoom-out-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2000">
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