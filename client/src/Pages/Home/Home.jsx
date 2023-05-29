import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeStyle.css'
import {
    Avatar, Nav, PlayFulCat, SMIcon, About, Skills, ContactMe, Footer, Navigation
} from "./Exports";

const FirstPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <Navigation />
            <div className='home' id='home'>
                <div className='doubleDholki' />
                <h1 className='titleHeading'>Full-Stack Developer, Designer & DevOps Engineer <span className='underscore'>_</span></h1>
                <p className='para'>I design, code and deploy beautifully, simple things and I love what I do.</p>
                <div className='avatarContainer'>
                    <img className='avatarImg' src={Avatar} alt='#avatar' />
                </div>
                <img className='catSvg' src={PlayFulCat} alt="#cat"></img>
                <SMIcon />
            </div>
            <About />
            <div className='imgCarouselContainer' onClick={() => navigate("/projects")}>
                <p className='clickBelow'>👇 Click on any tile for see my all Projects 👇</p>
                <div className='imgCarousel' />
            </div>
            <Skills />
            <ContactMe />
            <Footer />
        </>
    );
}

export default FirstPage