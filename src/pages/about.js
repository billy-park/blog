import React, { Component } from 'react';
import picture from '../images/me.jpg';
import styled from 'styled-components';

const AboutContent = styled.div`
    div {
        display: flex;
        
    }
    h1 {
        text-align: center;
    }
    img {
        height: 300px;
        margin-left: 30px;
    }
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        img {
            display: none;
        }
    }
`;

class About extends Component {
    render() {
        return (
            <AboutContent>
                <h1>About Me</h1>
                <div>
                    <p>
                    A passionate computing graduate with a strong interest in web development, 
                    I enjoy learning new technologies and my goal is to eventually work with every aspect of web development and become a full-stack web developer. 
                    I hope to find a position working with modern web technologies that will allow me to utilise and develop my skills in a practical environment.
                    <br />
                    <br />
                    This is my blog...
                    </p>
                    <img src={picture} alt="Picture of me!" />               
                </div>
            </AboutContent>
        );
    }
}

export default About;