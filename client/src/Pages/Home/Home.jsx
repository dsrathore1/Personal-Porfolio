import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeStyle.css'

import Avatar from '../../Components/Assets/PersonalPic.jpg';

import Nav from '../../Components/Nav/Nav'
import PlayFulCat from '../../Components/Assets/cat.svg'
import SMIcon from '../../Components/Social Media Icon/SMIcon';
import About from '../About/About';
import Skills from '../Skills/Skills';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Navigation from '../../Components/Navigation/Navigation';

const FirstPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <Navigation />
            <div className='home' id='home'>
                <h1 className='titleHeading'>Full-Stack Developer, Designer & DevOps Engineer <span className='underscore'>_</span></h1>
                <p className='para'>I design, code and deploy beautifully, simple things and I love what I do.</p>
                <div className='avatarContainer'><img className='avatarImg' src={Avatar} alt='#avatar'></img>
                </div>
                <img className='catSvg' src={PlayFulCat} alt="#cat"></img>
                <SMIcon />
            </div>
            <About />
            <Skills />
            <ContactMe />
            <button onClick={() => { navigate("/projects") }} className='allProjectsBtn'>All Projects</button>
            <Footer />

        </>
    )
}

export default FirstPage