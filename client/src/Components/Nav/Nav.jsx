import React from 'react';
import './NavStyle.css';

const Nav = () => {
    return (
        <>
            <div className='container' id='nav'>
                <span className='logo'>| D<span className='s'>S</span> |</span>
                <div className='MiddleTitle'>Portfo<span>lio.</span></div>
                <div>
                    <a href='#about' className='aboutBtn' >About me</a>
                    <a href='#contactMe' className='contactBtn btn'>Contact me</a>
                </div>
            </div>
        </>
    )
}

export default Nav