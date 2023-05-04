import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleRecipies from '../SingleRecipies/SingleRecipies';

const Recipies = ({ recipeData }) => {
    // console.log(recipeData);
    return (
        <Container className='my-5'>
            <h1 className='pop-font fw-bold'>My Recipies</h1>
            <h3 className='os-font text-success'>Have a look to my recipies</h3>
            <Row className='mt-4 mb-4'>
                {
                    recipeData.map((data, i) => <Col
                        xs={12} md={6} lg={4}
                        data-aos="zoom-in"
                        data-aos-easing="ease-in"
                        data-aos-duration="500">
                        <SingleRecipies
                            key={i}
                            data={data} />
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Recipies;