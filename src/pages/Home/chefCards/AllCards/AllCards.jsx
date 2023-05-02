import React from 'react';
import SingleChef from '../SingleChef/SingleChef';
import { Col, Row } from 'react-bootstrap';

const AllCards = ({ chefData }) => {
    return (
        <Row className='mt-4 mb-4'>
            {
                chefData.map(data => <Col xs={12} md={6} lg={4} className=''>
                    <SingleChef
                        key={data.chefId}
                        data={data} />
                </Col>)
            }
        </Row>
    );
};

export default AllCards;