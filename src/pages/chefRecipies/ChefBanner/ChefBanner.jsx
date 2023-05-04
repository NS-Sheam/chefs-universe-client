import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';

const ChefBanner = ({ chefData }) => {
    const { chefId, recipeId, chefImage, chefName, chefBio, yearOfExperience, numberOfRecipes, likes } = chefData;
    return (
        <Container>

            <div className='my-5 d-flex flex-column flex-md-row align-items-center'>
                <Row className='w-100'>
                    <Col xs={8}>
                        <img className='img-fluid rounded-4' src={chefImage} alt="" />
                    </Col>

                </Row>
                <div className='w-100'>
                    <h1 className='text-lg text-end band-secondary'>Hello I am <br />
                        <span className='band-color fw-bold'>{chefName}</span>
                    </h1>
                    <p className='band-color text-sm-end me-0'>{chefBio}</p>
                    <div className='h6 fw-bold'>
                        <p className='text-sm-end me-0'>
                            <FontAwesomeIcon className='band-color' icon={faBowlFood} /> I have {numberOfRecipes} Recipes
                        </p>
                        <p className='text-sm-end me-0'>
                            <FaThumbsUp className='text-warning' /> {likes} people likes my recipies
                        </p>
                        <p className='text-sm-end me-0 text-success h4 fw-bold'>
                        I have {yearOfExperience} years of Cooking experience
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ChefBanner;