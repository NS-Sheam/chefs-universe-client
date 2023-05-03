import React from 'react';
import SingleChefTalk from './SingleChefTalk';
import { Col, Row } from 'react-bootstrap';

const ChefTalk = ({chefData}) => {
    return (
        <div>
            <h2 className='py-4 fw-bold'>Our chef's</h2>
        <Row className='mt-4 mb-4'>
            {
                chefData.map((data) => <Col xs={12} md={6} className='mb-3'>
                    <SingleChefTalk
                        key={data.chefId}
                        data={data} />
                </Col>)
            }
        </Row>
        </div>
    );
};

export default ChefTalk;