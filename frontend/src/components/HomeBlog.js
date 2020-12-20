import React from 'react'
import { Container, Card } from 'react-bootstrap';
import background from '../images/protfliobackground.jpg';

const HomeBlog = () => {
    return (
        <div className='home-blog-wrapper'>
            <div className='home-blog' style={{backgroundImage: `url(${background})`}}>
                <Container className='py-5'>
                    <h1 className='home-blog-title'>Top Blog Post</h1>
                   <div className="home-blog-card-wrapper">
                        <Card className='home-blog-card'>Text 1</Card>
                        <Card className='home-blog-card'>Text 1</Card>
                        <Card className='home-blog-card'>Text 1</Card>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HomeBlog
