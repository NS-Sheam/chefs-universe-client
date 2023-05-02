import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const BlogCard = ({data}) => {
    const [show, setShow] = useState(false);
    return (
        <Card className='mb-2 h-100'>
                <Card.Body className='text-start'>
                    <Card.Title>{data.question}</Card.Title>
                    <Card.Text>
                        {
                            !show ?
                            data.answer.substring(0, 100) :
                            data.answer
                        }
                    </Card.Text>
                    <Card.Link onClick={()=> setShow(!show)}>Read More</Card.Link>
                </Card.Body>
            </Card>
    );
};

export default BlogCard;