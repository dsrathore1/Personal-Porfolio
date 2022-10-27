import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css';

const Nav = () => {
    return (
        <>
            <div className='container' id='nav'>
                <span className='logo'> DS<br/><span className='s'>RA</span></span>
                <div className='MiddleTitle'>Portfo<span>lio.</span></div>
                <div>
                    <Link to='/about'>
                        <a href='#about' className='aboutBtn' >About me</a>
                    </Link>
                    <Link to='/contact'>
                        <a href='#contactMe' className='contactBtn btn'>Donate me</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav