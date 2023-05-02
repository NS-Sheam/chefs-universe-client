import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./SingleChef.css"

const SingleChef = ({ data }) => {
    const { chefId, chefImage, chefName, yearOfExperience, numberOfRecipes, likes } = data;
    return (
        <Card className='chefCard mb-4'>
            <Card.Img className='h-50' variant="top" src={chefImage} />
            <Card.Body>
                <Card.Title>{chefName}</Card.Title>
                <Card.Text>
                    {yearOfExperience} of experience
                </Card.Text>
                <Card.Text>
                    <small>
                        {numberOfRecipes} Recipes
                    </small>
                    <small>
                        {likes} people likes
                    </small>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleChef;