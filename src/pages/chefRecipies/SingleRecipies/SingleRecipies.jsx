import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import "./SingleRecipies.css"
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { toast } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';


const SingleRecipies = ({ data }) => {
    const { recipeName, recipeImg, ingredients, methodOfCooking, rating } = data;
    const [favourite, setFavourite] = useState(false);
    // console.log(data);
    // console.log(ingredients);
    const handleFavouriteBtn = () => {
        if (!favourite) {
            setFavourite(true)
            toast.success('Added to Favourite');
        }
    }
    return (
        <Card className='chefCard mb-4 h-100'>
            
                <LazyLoad className='h-25'>
                    <Card.Img className='h-100' variant="top" src={recipeImg} />
                </LazyLoad>
            
            <Card.Body>
                <Card.Title className='band-color fw-bold h3'>{recipeName}</Card.Title>
                <Card.Text className='text-start'> <span className='fw-bold'>Ingredients: </span>
                    {
                        ingredients.map((ing, i) => <p className=''>
                            <FaCheck className='text-success' /> {ing}
                        </p>)
                    }
                    <p className='text-start'>
                        <span className='fw-bold text-decoration-underline'>Cooking Process:</span> {methodOfCooking}
                    </p>
                    <div className='d-flex justify-content-between align-content-center text-md'>
                        <p className='fw-bold'>
                            <span>Rating: {rating}</span>
                            <span>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating} readOnly
                                />
                            </span>
                        </p>
                        <p className='favourite' onClick={handleFavouriteBtn}>
                            {
                                !favourite ?
                                    <FontAwesomeIcon icon={faHeart} /> :
                                    <FontAwesomeIcon className='band-color' icon={faHeart} />
                            }
                        </p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleRecipies;