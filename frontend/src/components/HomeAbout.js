import React from 'react'
import { Container } from 'react-bootstrap';
import profileImage from '../images/nr.jpg';

const HomeAbout = () => {
    return (
        <Container>
        <div className='home-about'>
            <div className='home-about-title'>
                <h1>About Nathon</h1>
            </div>
            <div className='home-about-body'>
                <img src={profileImage} alt='Nathon Reed' />
                <p>
                    Cras sagittis lorem eu justo lobortis auctor. In rutrum tincidunt turpis, feugiat imperdiet massa bibendum vitae. Quisque eu lacus tortor. 
                    Fusce gravida ante tristique diam convallis pharetra. Nunc arcu mi, volutpat vitae venenatis et, molestie vitae lectus. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum mattis neque ac blandit. Duis sed vulputate metus, id accumsan 
                    nisl. Praesent neque felis, pulvinar at tellus eu, iaculis pellentesque turpis. Suspendisse luctus dui eget. penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum mattis neque ac blandit. Duis sed vulputate metus, id accumsan 
                   
                </p>
            </div>
        </div>
    </Container>
    )
}

export default HomeAbout
