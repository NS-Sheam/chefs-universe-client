import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import "./SingleRecipies.css"

const SingleRecipies = ({ data }) => {
    const { recipeName, recipeImg, ingredients, methodOfCooking, rating } = data;
    // console.log(data);
    // console.log(ingredients);
    return (
        <Card className='chefCard mb-4 h-100'>
            <div className='h-25'>
                <Card.Img className='h-100' variant="top" src={recipeImg} />
            </div>
            <Card.Body>
                <Card.Title className='band-color fw-bold h3'>{recipeName}</Card.Title>
                <Card.Text className='text-start'> <span className='fw-bold'>Ingredients: </span>
                    {
                        ingredients.map((ing, i) => <p className=''>
                            <FaCheck /> {ing}
                        </p>)
                    }
                    <p className='text-start'>
                        <span className='fw-bold text-decoration-underline'>Cooking Process:</span> {methodOfCooking}
                    </p>
                    <p className='fw-bold d-flex justify-content-between'>
                        <span>Rating: {rating}</span>
                        <span>Fav</span>
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleRecipies;