import React from 'react';
import { Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const SingleChefTalk = ({ data, i }) => {
    const { chefImage, chefName, yearOfExperience } = data;
    return (
        <div 
        // data-aos={i % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
        data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="100"
            className={`border border-2 mb-4 h-100 d-flex gap-5 justify-content-between align-items-center ${i % 2 === 0 ? "flex-column flex-md-row" : "flex-column flex-md-row-reverse"} p-4 border rounded-3`}>
            <LazyLoad className='h-100 w-100'>
                <Card.Img className='cheftalk-img h-100 img-fluid' variant="top" src={chefImage} />
            </LazyLoad>
            <div className='w-100'>
                <p className={i % 2 === 1 ? "text-start" : "text-end"}>
                    <span className='fw-bold h3 band-color fst-italic'>Hello. I am {chefName}.</span> I have  {yearOfExperience} years of experience. A chef is a highly trained and skilled professional cook who is proficient in all aspects of food preparation of a particular cuisine. The word "chef" is derived (from shortened) from the term chef de cuisine (French pronunciation: [ʃɛf.də .kɥi.zin]), the director or head of a kitchen. Chefs can receive both formal training from an institution, as well as through apprenticeship with an experienced chef.
                </p>

            </div>
        </div>
    );
};

export default SingleChefTalk;