import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleRecipies from '../SingleRecipies/SingleRecipies';

const Recipies = ({ recipeData }) => {
    // console.log(recipeData);
    return (
        <div className='my-5'>
            <h1 className='mb-5'>My Recipies</h1>
            <Row className='mt-4 mb-4'>
                {
                    recipeData.map((data, i) => <Col xs={12} md={6} lg={4} className=''>
                        <SingleRecipies
                            key={i}
                            data={data} />
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Recipies;