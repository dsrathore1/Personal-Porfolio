import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectNavStyle.css';

const Nav = () => {
    return (
        <>
            <div className='navBar2'>
                <h2 className='logo2'>DS<br /><span className='RA'>RA</span></h2>
                <ol className='projectOL'>
                    <Link to='/'>
                        <li className='projectList'>Home</li>
                    </Link>
                    <Link to='/projects'>
                        <li className='projectList'>Projects</li>
                    </Link>
                    <Link to='/design'>
                        <li className='projectList'>Design</li>
                    </Link>
                    <Link to='/development'>
                        <li className='projectList'>Development</li>
                    </Link>
                    <Link to='/devOps'>
                        <li className='projectList'>DevOps</li>
                    </Link>
                </ol>
            </div>
        </>
    )
}

export default Nav