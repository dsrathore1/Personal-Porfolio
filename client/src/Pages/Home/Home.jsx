import React from 'react'
import Nav from '../../Components/Nav/Nav'
import './HomeStyle.css'

import Avatar from '../../Components/Assets/avatar2.png';

import PlayFulCat from '../../Components/Assets/cat.svg'
import SMIcon from '../../Components/Social Media Icon/SMIcon';
import About from '../About/About';
import Skills from '../Skills/Skills';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';

const FirstPage = () => {
    return (
        <>
            <Nav />
            <div className='home' id='home'>
                <h1 className='titleHeading'>Full-Stack Developer, Designer & DevOps Engineer <span className='underscore'>_</span></h1>
                <p className='para'>I design, code and deploy beautifully, simple things and I love what I do.</p>
                <div className='avatarContainer'><img className='avatarImg' src={Avatar} alt='#avatar'></img>
                </div>
                <img className='catSvg' src={PlayFulCat} alt="#cat"></img>
                <SMIcon />
            </div>
<About/>
<Skills/>
<ContactMe/>
<Footer/>

        </>
    )
}

export default FirstPage