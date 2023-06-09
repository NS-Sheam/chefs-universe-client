import React from 'react';
import SingleChefTalk from './SingleChefTalk';
import { Col, Container, Row } from 'react-bootstrap';

const ChefTalk = ({ chefData }) => {
    return (
        <Container>
            <h2 className='pop-font pt-4 fw-bold'>Chef's message</h2>
            <h3 className='os-font text-success'>Get Helpful messeges</h3>
            <Row className='mt-4 mb-4'>
                {
                    chefData.map((data, i) => <Col xs={12} lg={6} className='mb-3' >
                        <SingleChefTalk 
                            i={i}
                            key={data.chefId}
                            data={data} 
                            />
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ChefTalk;