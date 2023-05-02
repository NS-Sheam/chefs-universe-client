import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./SingleChef.css"
import { FaThumbsUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SingleChef = ({ data }) => {
    const { chefId, recipeId, chefImage, chefName, yearOfExperience, numberOfRecipes, likes } = data;
    return (
        <Card className='chefCard mb-4'>
            <Card.Img className='h-50' variant="top" src={chefImage} />
            <Card.Body>
                <Card.Title className='band-color fw-bold display-6'>{chefName}</Card.Title>
                <Card.Text className='h4 fw-bold'>
                    {yearOfExperience} years of experience
                </Card.Text>
                <Card.Text className='d-flex justify-content-between h6 fw-bold'>
                    <p>
                        <FontAwesomeIcon className='band-color' icon={faBowlFood} /> {numberOfRecipes} Recipes
                    </p>
                    <p>
                        <FaThumbsUp className='text-warning' /> {likes} people likes
                    </p>
                </Card.Text>
                <Link to={`chef/${recipeId}`}>
                    <button className='band-bg px-3 py-2'>View Recipes</button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default SingleChef;