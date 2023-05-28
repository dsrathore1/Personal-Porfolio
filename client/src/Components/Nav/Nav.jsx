import React from 'react';
import './NavStyle.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='navContainer' id='nav'>
                <span className='logo'> DS<br /><span className='s'>RA</span></span>
                <div className='MiddleTitle'>Portfo<span>lio.</span></div>
                <div>
                    <Link to={'/resume'} className='aboutBtn' >About me</Link>
                    <Link to={'/donateMe'} className='donateBtn btn'>Donate Me</Link>
                </div>
            </div>
        </>
    )
}

export default Nav