import React from 'react';
import SingleChefTalk from './SingleChefTalk';
import { Col, Container, Row } from 'react-bootstrap';

const ChefTalk = ({ chefData }) => {
    return (
        <Container>
            <h2 className='py-4 fw-bold'>Our chef's</h2>
            <Row className='mt-4 mb-4'>
                {
                    chefData.map((data, i) => <Col xs={12} className='mb-3 mx-auto' >
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