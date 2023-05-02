import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import blogData from "../../../../../public/data/blogdata.json"
import BlogCard from '../BlogCard/BlogCard';
const Blogs = () => {
    const bData = blogData;
    return (
        <Container className='py-5 d-grid '>
            <Row>

                {
                    bData.map(data => <Col lg={3} md={6}>
                        <BlogCard
                            key={data.id}
                            data={data} />
                    </Col>
                    )
                }

            </Row>
        </Container>
    );
};

export default Blogs;