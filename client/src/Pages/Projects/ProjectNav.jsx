import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectNavStyle.css';

const Nav = () => {
    return (
        <>
            <div className='navBar'>
                <h2 className='logo'>DS<br /><span className='RA'>RA</span></h2>
                <ol>
                    <Link to='/projects'>
                        <li>All Projects</li>
                    </Link>
                    <Link to='/design'>
                        <li>Design</li>
                    </Link>
                    <Link to='/development'>
                        <li>Development</li>
                    </Link>
                    <Link to='/devOps'>
                        <li>DevOps</li>
                    </Link>
                </ol>
            </div>
        </>
    )
}

export default Nav