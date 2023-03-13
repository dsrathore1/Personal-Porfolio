import React from 'react';
import './NavStyle.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='container' id='nav'>
                <span className='logo'> DS<br /><span className='s'>RA</span></span>
                <div className='MiddleTitle'>Portfo<span>lio.</span></div>
                <div>
                    <a href='#about' className='aboutBtn' >About me</a>
                    <Link to={'/projects'}>
                        <a href='#contactMe' className='donateBtn btn'>Blogs</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav