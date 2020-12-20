import React from 'react';
import background from '../images/protfliobackground2.jpg';
import { Container, Card } from 'react-bootstrap';

const SpotLight = () => {
    return (
        <div className='home-wrapper' style={{backgroundImage: `url(${background})`}}>
                <Container className='py-5'>
                    <div className='spot-light'>
                       <span>
                        <p id='spot-light-name'>Nathon Reed Full Stack Developer</p>
                       </span>
                       <span>
                           <p id='spot-light-text'>Freelance Developer specializing in Full Stack Development with a emphasis in JavaScript, Python, and Php.</p>
                       </span>
                    </div>
                    <div className="home-card-display">
                    <div className="home-card-display-wrapper">
                        <Card className='home-card'>Text 1</Card>
                        <Card className='home-card'>Text 1</Card>
                        <Card className='home-card'>Text 1</Card>
                    </div>
                    </div>
                </Container>
        </div>
    )
}

export default SpotLight
