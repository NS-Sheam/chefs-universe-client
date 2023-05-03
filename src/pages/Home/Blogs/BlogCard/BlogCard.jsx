import React, { useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';

const BlogCard = ({data}) => {
    const [show, setShow] = useState(false);
    const ref = useRef();
    return (
        <Card className='mb-2 h-100'>
                <Card.Body ref={ref} className='text-start'>
                    <Card.Title>{data.question}</Card.Title>
                    <Card.Text>
                        {
                            !show ?
                            data.answer.substring(0, 100) :
                            data.answer
                        }
                    </Card.Text>
                    <Card.Link className='show-more' onClick={()=> setShow(!show)}>
                        {
                            !show ? "Show more" : "Show less"
                        }
                    </Card.Link>
                </Card.Body>
                    <ReactToPrint trigger={()=><button className='text-white py-2 px-2 band-bg border-0 rounded-1'>Print</button>} content={()=> ref.current}></ReactToPrint>
            </Card>
    );
};

export default BlogCard;