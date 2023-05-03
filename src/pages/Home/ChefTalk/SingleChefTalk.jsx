import React from 'react';
import { Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const SingleChefTalk = ({data}) => {
    const { chefImage, chefName, yearOfExperience } = data;
    return (
        <Card className='chefCard mb-4 h-100'>
            <LazyLoad className='h-50'>
                <Card.Img className='h-100' variant="top" src={chefImage} />
            </LazyLoad>
            <Card.Body>
                <Card.Title className='band-color fw-bold display-6'>{chefName}</Card.Title>
                <Card.Text className='text-start'>
                    Hello. I am {chefName}. I have  {yearOfExperience} years of experience. A chef is a highly trained and skilled professional cook who is proficient in all aspects of food preparation of a particular cuisine. The word "chef" is derived (from shortened) from the term chef de cuisine (French pronunciation: [ʃɛf.də .kɥi.zin]), the director or head of a kitchen. Chefs can receive both formal training from an institution, as well as through apprenticeship with an experienced chef.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleChefTalk;